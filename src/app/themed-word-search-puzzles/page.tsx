import Link from "next/link";
import type { Metadata } from "next";
import { ThemeBuilderForm } from "@/components/ThemeBuilderForm";
import { THEMED_PAGES } from "@/lib/puzzle/themedPages";

export const metadata: Metadata = {
  title: "Themed Word Search Puzzles – Free & Printable Games",
  description:
    "Choose a themed word search puzzle, play instantly, and print worksheets for classrooms or family time. Each theme is built to rank with clear copy and internal links.",
};

export default function ThemedWordSearchHubPage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="reveal">
          <span className="badge">Themed word searches</span>
          <h1>Themed Word Search Puzzles</h1>
          <p>
            Choose any of the curated themes below and the puzzle loads instantly with a playable grid, printable option, and a centered word list.
          </p>
          <p>
            Every page is optimized for search and internal linking, so you can keep launching new themes without reinventing the layout.
          </p>
          <div className="hero-actions">
            <Link className="button button-solid" href="/daily-word-search">
              Daily word search
            </Link>
            <Link className="button button-outline" href="/word-search-generator">
              Word search generator
            </Link>
            <Link className="button button-outline" href="/printable-word-search">
              Printable puzzles
            </Link>
          </div>
        </div>
        <div className="reveal reveal-delay-1 card">
          <h2>First themed launches</h2>
          <p className="hero-links">
            Scroll through the first five themes designed to rank in high-intent searches. Each link leads to the new template with a playable puzzle above the fold.
          </p>
          <div className="hero-actions" style={{ flexWrap: "wrap" }}>
            {THEMED_PAGES.map((theme) => (
              <Link
                key={theme.slug}
                className="button button-outline"
                href={`/themed-word-search-puzzles/${theme.slug}`}
              >
                {theme.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="card prose">
        <h2>Why these themed pages matter</h2>
        <p>
          Every themed page targets a unique keyword, opens with real copy, and immediately anchors the puzzle above the fold. That keeps the experience fast for players and gives Google a repeatable template that scales.
        </p>
        <p>
          As you add more themes, keep this hub updated with the newest entries so crawlers see a single crawl path for the entire category.
        </p>
        <p className="hero-links">
          Want to create a custom word list? Jump to the{" "}
          <Link href="/word-search-generator">Word Search Generator</Link>, grab a printable copy from{" "}
          <Link href="/printable-word-search">Printable Word Search Puzzles</Link>, or play the fresh{" "}
          <Link href="/daily-word-search">Daily Word Search</Link>.
        </p>
      </section>

      <ThemeBuilderForm />
    </div>
  );
}
