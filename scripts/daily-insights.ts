import Anthropic from "@anthropic-ai/sdk";
import { Octokit } from "@octokit/rest";
import { Resend } from "resend";

// ─── Configuration ───────────────────────────────────────────────────────────
const VERCEL_ACCESS_TOKEN = process.env.VERCEL_ACCESS_TOKEN!;
const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID!;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY!;
const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL!;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY!;

// ─── Clients ─────────────────────────────────────────────────────────────────
const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });
const resend = new Resend(RESEND_API_KEY);
const octokit = new Octokit({ auth: GITHUB_TOKEN });

// ─── Types ───────────────────────────────────────────────────────────────────
interface VercelAnalyticsData {
  pageViews: number;
  visitors: number;
  topPages: { page: string; views: number }[];
  topReferrers: { referrer: string; views: number }[];
  topCountries: { country: string; views: number }[];
  topDevices: { device: string; views: number }[];
}

// ─── Fetch Vercel Analytics ──────────────────────────────────────────────────
async function fetchVercelAnalytics(): Promise<VercelAnalyticsData> {
  const now = Date.now();
  const oneDayAgo = now - 24 * 60 * 60 * 1000;

  // Vercel Analytics API uses api.vercel.com, not vercel.com
  const baseUrl = `https://api.vercel.com/v1/web/insights`;
  
  const headers = {
    Authorization: `Bearer ${VERCEL_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  };

  // Try fetching with different parameter formats
  const params = new URLSearchParams({
    projectId: VERCEL_PROJECT_ID,
    from: new Date(oneDayAgo).toISOString(),
    to: new Date(now).toISOString(),
    environment: "production",
  });

  console.log("🔍 Debug: Fetching from Vercel Analytics API...");
  console.log(`   Project ID: ${VERCEL_PROJECT_ID}`);
  console.log(`   Time range: ${new Date(oneDayAgo).toISOString()} to ${new Date(now).toISOString()}`);

  // Try the insights endpoint
  try {
    const response = await fetch(`${baseUrl}?${params}`, { headers });
    const data = await response.json();
    
    console.log(`   API Response Status: ${response.status}`);
    console.log(`   API Response: ${JSON.stringify(data).slice(0, 500)}...`);

    if (data.error) {
      console.log(`   ⚠️ API Error: ${data.error.message || JSON.stringify(data.error)}`);
    }

    // If the main insights endpoint doesn't work, try the legacy endpoint
    if (!data.data && !data.pageViews) {
      console.log("   Trying alternative endpoint...");
      
      const altParams = new URLSearchParams({
        projectId: VERCEL_PROJECT_ID,
        from: oneDayAgo.toString(),
        to: now.toString(),
      });
      
      const altResponse = await fetch(`https://vercel.com/api/web-analytics/timeseries?${altParams}`, { headers });
      const altData = await altResponse.json();
      
      console.log(`   Alt API Response Status: ${altResponse.status}`);
      console.log(`   Alt API Response: ${JSON.stringify(altData).slice(0, 500)}...`);
    }
  } catch (error) {
    console.log(`   ❌ Fetch error: ${error}`);
  }

  // For now, return placeholder data so the rest of the pipeline works
  // We'll see what the API returns in the logs
  return {
    pageViews: 0,
    visitors: 0,
    topPages: [],
    topReferrers: [],
    topCountries: [],
    topDevices: [],
  };
}

// ─── Format Metrics for LLM ──────────────────────────────────────────────────
function formatMetricsForLLM(data: VercelAnalyticsData): string {
  const topPagesStr = data.topPages
    .map((p, i) => `  ${i + 1}. ${p.page} (${p.views} views)`)
    .join("\n");

  const topReferrersStr = data.topReferrers
    .map((r, i) => `  ${i + 1}. ${r.referrer} (${r.views} visits)`)
    .join("\n");

  const topCountriesStr = data.topCountries
    .map((c, i) => `  ${i + 1}. ${c.country} (${c.views} visitors)`)
    .join("\n");

  const topDevicesStr = data.topDevices
    .map((d) => `  - ${d.device}: ${d.views} visitors`)
    .join("\n");

  return `
📊 WORD SEARCH PUZZLE WEBSITE - DAILY METRICS
Date: ${new Date().toISOString().split("T")[0]}

TRAFFIC OVERVIEW:
- Total Page Views: ${data.pageViews.toLocaleString()}
- Unique Visitors: ${data.visitors.toLocaleString()}

TOP PAGES:
${topPagesStr || "  (no data)"}

TOP REFERRERS:
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

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 500,
    messages: [
      { role: "user", content: userPrompt },
    ],
    system: systemPrompt,
  });

  const content = response.content[0];
  if (content.type === "text") {
    return content.text;
  }
  throw new Error("Unexpected response format from Claude");
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
          This insight was generated by Claude AI based on your Vercel Analytics data.
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
*Generated automatically by the Daily Insights system*
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

  // 1. Fetch analytics
  console.log("📊 Fetching Vercel Analytics...");
  const analyticsData = await fetchVercelAnalytics();
  const metricsText = formatMetricsForLLM(analyticsData);
  console.log(metricsText);
  console.log();

  // 2. Get recommendation from Claude
  console.log("🤖 Getting recommendation from Claude...");
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
