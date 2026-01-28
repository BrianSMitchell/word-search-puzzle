import { PuzzlePlayer } from "@/components/PuzzlePlayer";
import { GameSchema, BreadcrumbSchema } from "@/components/Schema";
import { siteUrl } from "@/lib/site";
import { seedFromString } from "@/lib/puzzle/rng";
import { normalizeWords } from "@/lib/puzzle/words";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Large Print Word Search – Free Online Puzzles | WordSearchPuzzle.io",
  description:
    "Play large print word search puzzles online for free. Bigger letters and simpler grids designed for seniors, low vision readers, and anyone who prefers easy-to-read puzzles.",
  alternates: {
    canonical: `${siteUrl}/large-print-word-search`,
  },
  openGraph: {
    title: "Large Print Word Search – Easy to Read Puzzles",
    description:
      "Free large print word search puzzles with bigger letters and simpler grids. Perfect for seniors and low vision readers.",
    type: "website",
  },
};

const LARGE_PRINT_WORDS = normalizeWords(
  [
    "garden",
    "sunset",
    "breeze",
    "flower",
    "stream",
    "meadow",
    "forest",
    "bridge",
    "candle",
    "gentle",
  ],
  10
);

export default function LargePrintWordSearchPage() {
  return (
    <div className="page">
      <GameSchema
        name="Large Print Word Search"
        description="Large print word search puzzles with bigger letters and simpler grids. Designed for seniors, low vision readers, and anyone who prefers easy-to-read puzzles."
        url="/large-print-word-search"
        genre="Word Search Puzzle"
        audience="Seniors"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Large Print Word Search", url: "/large-print-word-search" },
        ]}
      />

      <section className="hero hero-tool">
        <div className="reveal">
          <span className="badge">Large print</span>
          <h1>Large Print Word Search Puzzles</h1>
          <p>
            Enjoy word search puzzles with bigger, easier-to-read letters. Our
            large print puzzles use a smaller 10×10 grid with clear spacing —
            perfect for seniors, anyone with low vision, or people who simply
            prefer a more comfortable reading size.
          </p>
          <div className="hero-actions">
            <Link className="button button-solid" href="/easy-word-search">
              Easy word search
            </Link>
            <Link className="button button-outline" href="/printable-word-search">
              Printable version
            </Link>
            <Link className="button button-outline" href="/daily-word-search">
              Daily word search
            </Link>
          </div>
          <p className="hero-links">
            Press <strong>New puzzle</strong> for a fresh grid, or{" "}
            <Link href="/printable-word-search">print this puzzle</Link> for a
            paper copy with large, clear text.
          </p>
        </div>
        <div className="reveal reveal-delay-1">
          <PuzzlePlayer
            title="Large print puzzle"
            config={{
              gridSize: 10,
              words: LARGE_PRINT_WORDS,
              allowDiagonal: false,
              allowBackwards: false,
            }}
            initialSeed={seedFromString("large-print-word-search")}
            newPuzzleLabel="New puzzle"
          />
        </div>
      </section>

      <section className="card prose no-print">
        <h2>Accessible word search for everyone</h2>
        <p>
          Large print word search puzzles make the classic game more accessible.
          The bigger grid cells and shorter word lists reduce eye strain and make
          it easier to track letters across the grid. These puzzles are popular
          with seniors, people recovering from eye surgery, and anyone who finds
          standard puzzle books hard to read.
        </p>
        <p>
          Playing word search puzzles regularly can help maintain mental
          sharpness, improve pattern recognition, and provide a calming,
          meditative activity. Our large print version removes the frustration of
          squinting at tiny letters so you can focus on the fun.
        </p>
      </section>

      <section className="card prose no-print">
        <h2>Tips for large print puzzle players</h2>
        <ul>
          <li>
            Use your browser&apos;s zoom (Ctrl/Cmd + Plus) to make the grid even
            larger on screen
          </li>
          <li>
            <Link href="/printable-word-search">Print the puzzle</Link> for a
            paper copy — great for group activities
          </li>
          <li>
            Try the <Link href="/easy-word-search">Easy Word Search</Link> for
            another beginner-friendly option
          </li>
          <li>
            Visit the{" "}
            <Link href="/word-search-generator">Word Search Generator</Link> to
            create a custom puzzle with your own words
          </li>
        </ul>
      </section>

      <section className="card prose no-print">
        <h2>More puzzles to explore</h2>
        <p>
          Browse our full collection of puzzles for every skill level and
          interest:
        </p>
        <ul>
          <li>
            <Link href="/easy-word-search">Easy Word Search</Link> — Simple
            grids for beginners
          </li>
          <li>
            <Link href="/themed-word-search-puzzles">Themed Puzzles</Link> —
            Animals, holidays, science, and more
          </li>
          <li>
            <Link href="/daily-word-search">Daily Word Search</Link> — A fresh
            puzzle every day
          </li>
          <li>
            <Link href="/printable-word-search">Printable Puzzles</Link> —
            Print-ready layouts for offline use
          </li>
        </ul>
      </section>
    </div>
  );
}
