import OpenAI from "openai";
import { Resend } from "resend";

// ─── Configuration ───────────────────────────────────────────────────────────
const MOONSHOT_API_KEY = process.env.MOONSHOT_API_KEY!;
const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL!;
const GOOGLE_CREDENTIALS = process.env.GOOGLE_CREDENTIALS!;
const GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID!;

// ─── Clients ─────────────────────────────────────────────────────────────────
const openai = new OpenAI({ apiKey: MOONSHOT_API_KEY, baseURL: "https://api.moonshot.ai/v1" });
const resend = new Resend(RESEND_API_KEY);

// ─── Types ───────────────────────────────────────────────────────────────────
interface AnalyticsData {
  pageViews: number;
  visitors: number;
  sessions: number;
  avgSessionDuration: number;
  bounceRate: number;
  topPages: { page: string; views: number }[];
  topReferrers: { referrer: string; sessions: number }[];
  topCountries: { country: string; visitors: number }[];
  topDevices: { device: string; sessions: number }[];
}

// ─── Google Auth ─────────────────────────────────────────────────────────────
async function getGoogleAccessToken(): Promise<string> {
  const credentials = JSON.parse(GOOGLE_CREDENTIALS);
  
  // Create JWT
  const header = { alg: "RS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: credentials.client_email,
    scope: "https://www.googleapis.com/auth/analytics.readonly",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  // Base64url encode
  const base64url = (obj: object) =>
    Buffer.from(JSON.stringify(obj))
      .toString("base64")
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");

  const unsignedToken = `${base64url(header)}.${base64url(claim)}`;

  // Sign with private key
  const crypto = await import("crypto");
  const sign = crypto.createSign("RSA-SHA256");
  sign.update(unsignedToken);
  const signature = sign
    .sign(credentials.private_key, "base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  const jwt = `${unsignedToken}.${signature}`;

  // Exchange JWT for access token
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  const data = await response.json();
  if (data.error) {
    throw new Error(`Google Auth Error: ${data.error_description || data.error}`);
  }
  return data.access_token;
}

// ─── Fetch Google Analytics ──────────────────────────────────────────────────
async function fetchGoogleAnalytics(): Promise<AnalyticsData> {
  console.log("🔑 Getting Google access token...");
  const accessToken = await getGoogleAccessToken();
  
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  const dateRange = {
    startDate: yesterday.toISOString().split("T")[0],
    endDate: yesterday.toISOString().split("T")[0],
  };

  console.log(`📊 Fetching GA4 data for ${dateRange.startDate}...`);

  const baseUrl = `https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY_ID}:runReport`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  // Fetch overview metrics
  const overviewResponse = await fetch(baseUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      dateRanges: [dateRange],
      metrics: [
        { name: "screenPageViews" },
        { name: "activeUsers" },
        { name: "sessions" },
        { name: "averageSessionDuration" },
        { name: "bounceRate" },
      ],
    }),
  });
  const overviewData = await overviewResponse.json();
  
  if (overviewData.error) {
    console.error("GA4 API Error:", overviewData.error);
    throw new Error(`GA4 Error: ${overviewData.error.message}`);
  }

  // Fetch top pages
  const pagesResponse = await fetch(baseUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      dateRanges: [dateRange],
      dimensions: [{ name: "pagePath" }],
      metrics: [{ name: "screenPageViews" }],
      limit: 10,
      orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
    }),
  });
  const pagesData = await pagesResponse.json();

  // Fetch top referrers
  const referrersResponse = await fetch(baseUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      dateRanges: [dateRange],
      dimensions: [{ name: "sessionSource" }],
      metrics: [{ name: "sessions" }],
      limit: 10,
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    }),
  });
  const referrersData = await referrersResponse.json();

  // Fetch top countries
  const countriesResponse = await fetch(baseUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      dateRanges: [dateRange],
      dimensions: [{ name: "country" }],
      metrics: [{ name: "activeUsers" }],
      limit: 10,
      orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
    }),
  });
  const countriesData = await countriesResponse.json();

  // Fetch device breakdown
  const devicesResponse = await fetch(baseUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      dateRanges: [dateRange],
      dimensions: [{ name: "deviceCategory" }],
      metrics: [{ name: "sessions" }],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    }),
  });
  const devicesData = await devicesResponse.json();

  // Parse overview metrics
  const metrics = overviewData.rows?.[0]?.metricValues || [];
  const pageViews = parseInt(metrics[0]?.value || "0");
  const visitors = parseInt(metrics[1]?.value || "0");
  const sessions = parseInt(metrics[2]?.value || "0");
  const avgSessionDuration = parseFloat(metrics[3]?.value || "0");
  const bounceRate = parseFloat(metrics[4]?.value || "0") * 100;

  // Parse dimensional data
  const topPages = (pagesData.rows || []).slice(0, 5).map((row: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }) => ({
    page: row.dimensionValues[0].value,
    views: parseInt(row.metricValues[0].value),
  }));

  const topReferrers = (referrersData.rows || []).slice(0, 5).map((row: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }) => ({
    referrer: row.dimensionValues[0].value || "(direct)",
    sessions: parseInt(row.metricValues[0].value),
  }));

  const topCountries = (countriesData.rows || []).slice(0, 5).map((row: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }) => ({
    country: row.dimensionValues[0].value,
    visitors: parseInt(row.metricValues[0].value),
  }));

  const topDevices = (devicesData.rows || []).map((row: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }) => ({
    device: row.dimensionValues[0].value,
    sessions: parseInt(row.metricValues[0].value),
  }));

  console.log(`   ✅ Found ${pageViews} page views, ${visitors} visitors`);

  return {
    pageViews,
    visitors,
    sessions,
    avgSessionDuration,
    bounceRate,
    topPages,
    topReferrers,
    topCountries,
    topDevices,
  };
}

// ─── Format Metrics for LLM ──────────────────────────────────────────────────
function formatMetricsForLLM(data: AnalyticsData): string {
  const topPagesStr = data.topPages
    .map((p, i) => `  ${i + 1}. ${p.page} (${p.views} views)`)
    .join("\n");

  const topReferrersStr = data.topReferrers
    .map((r, i) => `  ${i + 1}. ${r.referrer} (${r.sessions} sessions)`)
    .join("\n");

  const topCountriesStr = data.topCountries
    .map((c, i) => `  ${i + 1}. ${c.country} (${c.visitors} visitors)`)
    .join("\n");

  const topDevicesStr = data.topDevices
    .map((d) => `  - ${d.device}: ${d.sessions} sessions`)
    .join("\n");

  const avgDurationFormatted = `${Math.floor(data.avgSessionDuration / 60)}m ${Math.floor(data.avgSessionDuration % 60)}s`;

  return `
📊 WORD SEARCH PUZZLE WEBSITE - DAILY METRICS
Date: ${new Date().toISOString().split("T")[0]} (data from yesterday)

TRAFFIC OVERVIEW:
- Page Views: ${data.pageViews.toLocaleString()}
- Unique Visitors: ${data.visitors.toLocaleString()}
- Sessions: ${data.sessions.toLocaleString()}
- Avg Session Duration: ${avgDurationFormatted}
- Bounce Rate: ${data.bounceRate.toFixed(1)}%

TOP PAGES:
${topPagesStr || "  (no data)"}

TOP TRAFFIC SOURCES:
${topReferrersStr || "  (no data)"}

TOP COUNTRIES:
${topCountriesStr || "  (no data)"}

DEVICE BREAKDOWN:
${topDevicesStr || "  (no data)"}
`.trim();
}

// ─── Get Recommendation from Claude ──────────────────────────────────────────
async function getRecommendation(metricsText: string): Promise<string> {
  const systemPrompt = `You are an expert product manager and growth advisor for a word search puzzle website. 
The site offers:
- A word search generator where users create custom puzzles
- Pre-made themed puzzles (holidays, sports, animals, etc.)
- A daily puzzle feature
- PDF download/print functionality

Your job is to analyze daily metrics and provide ONE specific, actionable recommendation to improve the site.
Focus on: growth opportunities, UX improvements, content gaps, SEO opportunities, or conversion optimization.`;

  const userPrompt = `Here are today's analytics for the word search puzzle website:

${metricsText}

Based on this data, provide exactly ONE high-leverage action item I should take.

Format your response as:
**RECOMMENDATION: [Short title]**

**WHY:** [1-2 sentences explaining the insight from the data]

**WHAT TO DO:** [Specific, actionable steps - be concrete]

**EXPECTED IMPACT:** [High/Medium] - [Brief explanation]

Keep the entire response under 200 words. Be specific and actionable.`;

  const response = await openai.chat.completions.create({
    model: "kimi-k2.5-preview",
    max_tokens: 500,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
  });

  const content = response.choices[0]?.message?.content;
  if (content) {
    return content;
  }
  throw new Error("Unexpected response format from Kimi");
}

// ─── Send Email ──────────────────────────────────────────────────────────────
async function sendEmail(metrics: string, recommendation: string): Promise<void> {
  const today = new Date().toISOString().split("T")[0];

  await resend.emails.send({
    from: "Daily Insights <onboarding@resend.dev>",
    to: NOTIFICATION_EMAIL,
    subject: `📊 Word Search Daily Insight - ${today}`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #1a1a1a;">Daily Insight</h1>
        
        <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
          <pre style="white-space: pre-wrap; font-size: 14px; margin: 0;">${metrics}</pre>
        </div>
        
        <div style="background: #e8f4e8; padding: 16px; border-radius: 8px; border-left: 4px solid #22c55e;">
          <h2 style="margin-top: 0; color: #15803d;">🎯 Today's Recommendation</h2>
          <div style="line-height: 1.6;">${recommendation.replace(/\n/g, "<br>")}</div>
        </div>
        
        <p style="color: #666; font-size: 12px; margin-top: 24px;">
          This insight was generated by Kimi K2.5 AI based on your Google Analytics data.
        </p>
      </div>
    `,
  });

  console.log("✅ Email sent successfully");
}

// ─── Save Report to Repository ───────────────────────────────────────────────
async function saveReport(metrics: string, recommendation: string): Promise<void> {
  const today = new Date().toISOString().split("T")[0];
  const reportPath = `reports/${today}.md`;

  const content = `# Daily Insights Report - ${today}

## Metrics

\`\`\`
${metrics}
\`\`\`

## Recommendation

${recommendation}

---
*Generated automatically by the Daily Insights system using Google Analytics*
`;

  // Write to local filesystem (GitHub Actions will commit it)
  const fs = await import("fs");
  const path = await import("path");

  const reportsDir = path.join(process.cwd(), "..", "reports");
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  fs.writeFileSync(path.join(reportsDir, `${today}.md`), content);
  console.log(`✅ Report saved to ${reportPath}`);
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log("🚀 Starting daily insights generation...\n");

  // 1. Fetch analytics from Google Analytics
  console.log("📊 Fetching Google Analytics data...");
  const analyticsData = await fetchGoogleAnalytics();
  const metricsText = formatMetricsForLLM(analyticsData);
  console.log(metricsText);
  console.log();

  // 2. Get recommendation from Claude
  console.log("🤖 Getting recommendation from Kimi K2.5...");
  const recommendation = await getRecommendation(metricsText);
  console.log("\n" + recommendation + "\n");

  // 3. Send email
  console.log("📧 Sending email...");
  await sendEmail(metricsText, recommendation);

  // 4. Save report
  console.log("💾 Saving report...");
  await saveReport(metricsText, recommendation);

  console.log("\n✨ Daily insights complete!");
}

main().catch((error) => {
  console.error("❌ Error:", error);
  process.exit(1);
});
