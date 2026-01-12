import Link from "next/link";
import type { Metadata } from "next";
import { THEMES } from "@/lib/puzzle/themes";

export const metadata: Metadata = {
  title: "Themed Word Search Puzzles - Free Online Games",
  description:
    "Browse themed word search puzzles online. Choose animals, holidays, Bible, Christmas, and more to play or print.",
};

export default function WordSearchThemesPage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="reveal">
          <span className="badge">Themed word searches</span>
          <h1>Themed Word Search Puzzles</h1>
          <p>
            Pick a theme and start playing instantly. Every puzzle is free, mobile
            friendly, and ready to print if you want a worksheet.
          </p>
          <div className="hero-actions">
            <Link className="button button-solid" href="/daily-word-search">
              Daily word search
            </Link>
            <Link className="button button-outline" href="/word-search-generator">
              Make your own puzzle
            </Link>
          </div>
        </div>
        <div className="reveal reveal-delay-1 card">
          <h2>Popular themes</h2>
          <div className="hero-actions" style={{ marginTop: "1rem" }}>
            {THEMES.map((theme) => (
              <Link
                key={theme.slug}
                className="button button-outline"
                href={`/word-search/${theme.slug}`}
              >
                {theme.name} word search
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="card prose">
        <h2>Play themed word search puzzles online</h2>
        <p>
          Themed word searches are a great way to practice vocabulary or match a
          classroom topic. Choose a theme, tap or drag to highlight words, and finish
          the puzzle at your own pace. Each theme is available online with no sign-up
          and no download.
        </p>
        <p>
          Want something custom? Visit the word search generator to build a puzzle
          from your own word list or print a clean worksheet for offline use.
        </p>
        <p className="hero-links">
          Explore the <Link href="/word-search-generator">Word Search Generator</Link>{" "}
          or print a worksheet from{" "}
          <Link href="/printable-word-search">Printable Word Search Puzzles</Link>.
        </p>
      </section>
    </div>
  );
}
