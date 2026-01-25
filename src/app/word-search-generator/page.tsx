import { AdSlot } from "@/components/AdSlot";
import { BreadcrumbSchema, GameSchema, HowToSchema } from "@/components/Schema";
import { WordSearchGenerator } from "@/components/WordSearchGenerator";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Word Search Generator - Make Your Own Free Puzzle",
  description:
    "Create a free word search puzzle online. Add your word list, choose grid size and difficulty, and print instantly with no download.",
  openGraph: {
    title: "Word Search Generator - Make Your Own Free Puzzle",
    description: "Create custom word search puzzles instantly. Add your words, choose difficulty, print or play online.",
    type: "website",
    images: ["/api/og?title=Word%20Search%20Generator"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Word Search Generator",
    description: "Create custom word search puzzles instantly. Free, no sign-up required.",
    images: ["/api/og?title=Word%20Search%20Generator"],
  },
};

const inlineSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE ?? "";
const sidebarSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR ?? "";

type WordSearchGeneratorPageProps = {
  searchParams?: Promise<{
    words?: string;
    theme?: string;
  }>;
};

export default async function WordSearchGeneratorPage({ searchParams }: WordSearchGeneratorPageProps) {
  const params = await searchParams;
  const wordsParam = params?.words ?? "";
  const themeParam = params?.theme ?? "";

  return (
    <div className="page">
      {/* Schema Markup */}
      <GameSchema
        name="Word Search Generator"
        description="Create custom word search puzzles instantly with your own word lists. Choose grid size, difficulty, and print or play online."
        url="/word-search-generator"
        genre="Puzzle Generator"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Word Search Generator", url: "/word-search-generator" },
        ]}
      />
      <HowToSchema
        name="How to Create a Word Search Puzzle"
        description="Create a custom word search puzzle in minutes using our free online generator."
        url="/word-search-generator"
        totalTime="PT3M"
        steps={[
          {
            name: "Enter your words",
            text: "Type or paste your word list into the input field. Enter one word per line, or separate words with commas. Use 10-20 words for best results.",
          },
          {
            name: "Choose grid size",
            text: "Select a grid size that fits your needs. Smaller grids (10x10) work well for beginners, while larger grids (16x16+) provide more challenge.",
          },
          {
            name: "Set difficulty options",
            text: "Toggle diagonal words on or off. Enable backwards words for extra difficulty. Keep both off for easy puzzles suitable for children.",
          },
          {
            name: "Generate the puzzle",
            text: "Click the Generate button to create your puzzle. The words will be placed in the grid and surrounded by random letters.",
          },
          {
            name: "Play or print",
            text: "Play the puzzle directly in your browser, or click Print to get a clean worksheet version without ads or navigation.",
          },
        ]}
      />

      <section className="hero hero-tool">
        <div className="reveal no-print">
          <span className="badge">Word search generator</span>
          <h1>Word Search Generator</h1>
          <p>
            Make your own word search puzzle in seconds. Enter a custom word list,
            choose the grid size, and decide whether to allow diagonal or backwards
            words.
          </p>
          <div className="hero-actions">
            <Link className="button button-solid" href="/daily-word-search">
              Play the daily puzzle
            </Link>
            <Link className="button button-outline" href="/printable-word-search">
              Printable puzzles
            </Link>
          </div>
        </div>
        <div className="reveal reveal-delay-1">
          <WordSearchGenerator initialWords={wordsParam} initialThemeName={themeParam} />
        </div>
      </section>

      <div className="page-grid no-print">
        <div className="page-main">
          <AdSlot slot={inlineSlot} />
          <section className="card prose">
            <h2>Create custom word search puzzles</h2>
            <p>
              The generator is built for teachers, parents, and anyone who wants a
              themed word search without extra steps. Add a list of names, vocabulary
              words, or event themes, then pick the grid size that fits your audience.
              Larger grids give you more room, while smaller grids keep the puzzle
              quick and approachable.
            </p>
            <p>
              Toggle diagonal words for a harder challenge, or keep everything
              straight to make the puzzle easier for younger players. You can print
              instantly or share the page with students so everyone gets the same
              puzzle.
            </p>
            <p>
              The generator runs entirely in your browser, so there is nothing to
              install and no sign-up required. Every puzzle is created deterministically
              from your inputs, which keeps results consistent and easy to revisit.
            </p>
          </section>

          <section className="card prose">
            <h2>How to use the word search generator</h2>
            <ol>
              <li><strong>Enter your words</strong> – Type or paste your word list, one word per line</li>
              <li><strong>Choose grid size</strong> – Smaller for beginners, larger for challenge</li>
              <li><strong>Set difficulty</strong> – Toggle diagonal and backwards words</li>
              <li><strong>Generate</strong> – Click to create your puzzle instantly</li>
              <li><strong>Play or print</strong> – Use it online or print a clean worksheet</li>
            </ol>
          </section>
        </div>
        <aside className="page-aside">
          <AdSlot slot={sidebarSlot} />
          <section className="card">
            <h3>Need a ready-made puzzle?</h3>
            <div className="prose">
              <p>
                Try the daily word search for a quick brain break, or print a clean
                worksheet for offline play.
              </p>
            </div>
            <div className="hero-actions">
              <Link className="button button-solid" href="/daily-word-search">
                Daily word search
              </Link>
              <Link className="button button-outline" href="/printable-word-search">
                Printable puzzles
              </Link>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
