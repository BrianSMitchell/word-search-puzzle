import { AdSlot } from "@/components/AdSlot";
import { WordSearchGenerator } from "@/components/WordSearchGenerator";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Word Search Generator - Make Your Own Free Puzzle",
  description:
    "Create a free word search puzzle online. Add your word list, choose grid size and difficulty, and print instantly with no download.",
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
      <section className="hero">
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
