import OpenAI from "openai";
import fs from "fs";
import path from "path";

// ─── Configuration ───────────────────────────────────────────────────────────
const MOONSHOT_API_KEY = process.env.MOONSHOT_API_KEY!;
if (!MOONSHOT_API_KEY) {
  console.error("❌ MOONSHOT_API_KEY is missing");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: MOONSHOT_API_KEY, baseURL: "https://api.moonshot.ai/v1" });
const BLOG_DIR = path.join(process.cwd(), "..", "src", "content", "blog");

// Ensure blog directory exists
if (!fs.existsSync(BLOG_DIR)) {
  fs.mkdirSync(BLOG_DIR, { recursive: true });
}

// ─── Prompts ─────────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are an expert content strategist and writer for a popular Word Search Puzzle website.
Your audience includes teachers, parents, seniors, and puzzle enthusiasts.
Your writing style is engaging, clear, helpful, and optimistic. You avoid fluff and focus on value.
You are tasked with writing a daily blog post that drives SEO traffic and engages users.`;

// ─── Helpers ─────────────────────────────────────────────────────────────────
function getExistingTitles(): string[] {
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => {
      const content = fs.readFileSync(path.join(BLOG_DIR, f), "utf-8");
      const match = content.match(/title:\s*"(.*?)"/);
      return match ? match[1] : "";
    })
    .filter(Boolean);
}

async function generateTopic(existingTitles: string[]): Promise<string> {
  const existingList = existingTitles.join("\n- ");
  const prompt = `
I need a topic for today's blog post. 
Here are the tiles of the posts we already have (DO NOT DUPLICATE THESE):
- ${existingList}

Categories to rotate through:
1. Educational (e.g., Spelling, Vocabulary, Classroom ideas)
2. Brain Health (e.g., Cognitive benefits, Memory, Aging)
3. Fun/Trivia (e.g., History of puzzles, Word origins)
4. Tips & Strategies (e.g., How to solve faster, Pattern recognition)

Please suggest exactly ONE topic idea. Return ONLY the topic title/headline.
`;

  const response = await openai.chat.completions.create({
    model: "kimi-k2.5-preview",
    max_tokens: 100,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: prompt },
    ],
  });

  const content = response.choices[0]?.message?.content;
  if (content) {
    return content.trim().replace(/^"|"$/g, "");
  }
  throw new Error("Failed to generate topic");
}

async function generatePostContent(topic: string): Promise<string> {
  const prompt = `
Write a complete, ready-to-publish blog post about: "${topic}".

Requirements:
- Length: 600-1000 words.
- Format: MDX (Markdown).
- Tone: Friendly, educational, authority on puzzles.
- Structure:
  - Strong hook in intro.
  - clear H2 headers.
  - Bullet points where appropriate.
  - A definitive "call to action" at the end to play a daily puzzle or create a custom one.

IMPORTANT: Output the content with strict Frontmatter at the top.
Frontmatter format:
---
title: "The Exact Title"
description: "A compelling 150-char meta description."
date: "YYYY-MM-DD"
author: "Puzzle Editor"
tags: ["Tag1", "Tag2"]
---

Do not include any other text before or after the markdown.
`;

  const response = await openai.chat.completions.create({
    model: "kimi-k2.5-preview",
    max_tokens: 2000,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: prompt },
    ],
  });

  const content = response.choices[0]?.message?.content;
  if (content) {
    // Ensure we get clean date
    const today = new Date().toISOString().split("T")[0];
    let text = content;
    
    // Force date correction if LLM hallucinates a date
    text = text.replace(/date: ".*?"/, `date: "${today}"`);
    return text;
  throw new Error("Failed to generate content");
}

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log("🚀 Starting Daily Blog Generator...");

  // 1. Check existing content
  const existingTitles = getExistingTitles();
  console.log(`📚 Found ${existingTitles.length} existing posts.`);

  // 2. Generating Topic
  console.log("🤔 Brainstorming topic...");
  let topic = await generateTopic(existingTitles);
  console.log(`💡 Selected Topic: ${topic}`);

  // 3. Generating Content
  console.log("✍️ Writing article...");
  const content = await generatePostContent(topic);

  // 4. Save File
  const today = new Date().toISOString().split("T")[0];
  const slug = slugify(topic);
  const filename = `${today}-${slug}.mdx`;
  const filePath = path.join(BLOG_DIR, filename);

  fs.writeFileSync(filePath, content);
  console.log(`💾 Saved new post to: ${filePath}`);
}

main().catch((error) => {
  console.error("❌ Error:", error);
  process.exit(1);
});
