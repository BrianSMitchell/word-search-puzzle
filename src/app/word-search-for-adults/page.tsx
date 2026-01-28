import { PuzzlePlayer } from "@/components/PuzzlePlayer";
import { GameSchema, BreadcrumbSchema } from "@/components/Schema";
import { siteUrl } from "@/lib/site";
import { seedFromString } from "@/lib/puzzle/rng";
import { normalizeWords } from "@/lib/puzzle/words";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Word Search for Adults – Free Online Puzzles | WordSearchPuzzle.io",
  description:
    "Play challenging word search puzzles designed for adults. Larger grids, complex vocabulary, diagonal and backwards words. Free online with no download.",
  alternates: {
    canonical: `${siteUrl}/word-search-for-adults`,
  },
  openGraph: {
    title: "Word Search for Adults – Free Challenging Puzzles",
    description:
      "Play challenging word search puzzles designed for adults. Larger grids, complex vocabulary, and harder difficulty.",
    type: "website",
  },
};

const ADULT_WORDS = normalizeWords(
  [
    "philosophy",
    "quantum",
    "synthesis",
    "algorithm",
    "paradox",
    "cognition",
    "rhetoric",
    "paradigm",
    "catalyst",
    "metaphor",
    "resonance",
    "spectrum",
    "anomaly",
    "entropy",
    "theorem",
    "abstract",
  ],
  16
);

export default function WordSearchForAdultsPage() {
  return (
    <div className="page">
      <GameSchema
        name="Word Search for Adults"
        description="Challenging word search puzzles designed for adults with complex vocabulary, larger grids, and harder difficulty settings."
        url="/word-search-for-adults"
        genre="Word Search Puzzle"
        audience="Adults"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Word Search for Adults", url: "/word-search-for-adults" },
        ]}
      />

      <section className="hero hero-tool">
        <div className="reveal">
          <span className="badge">Adult puzzles</span>
          <h1>Word Search Puzzles for Adults</h1>
          <p>
            These word search puzzles are built for grown-ups who want a real
            challenge. Expect larger grids, longer words drawn from science,
            philosophy, and culture, plus diagonal and backwards placements that
            keep things interesting.
          </p>
          <div className="hero-actions">
            <Link className="button button-solid" href="/hard-word-search">
              Hard word search
            </Link>
            <Link className="button button-outline" href="/word-search-generator">
              Build your own puzzle
            </Link>
            <Link className="button button-outline" href="/daily-word-search">
              Daily word search
            </Link>
          </div>
          <p className="hero-links">
            Hit <strong>New puzzle</strong> in the grid below to get a fresh
            layout, or explore our{" "}
            <Link href="/themed-word-search-puzzles">themed collections</Link>.
          </p>
        </div>
        <div className="reveal reveal-delay-1">
          <PuzzlePlayer
            title="Adult puzzle"
            config={{
              gridSize: 16,
              words: ADULT_WORDS,
              allowDiagonal: true,
              allowBackwards: true,
            }}
            initialSeed={seedFromString("word-search-for-adults")}
            newPuzzleLabel="New puzzle"
          />
        </div>
      </section>

      <section className="card prose no-print">
        <h2>Why adults love word search puzzles</h2>
        <p>
          Word search puzzles are not just for kids. Adults enjoy them as a way
          to unwind, sharpen focus, and expand vocabulary. Research suggests that
          regular word puzzles can help maintain cognitive function and reduce
          stress — making them an ideal break during a busy day.
        </p>
        <p>
          Our adult-oriented puzzles use advanced vocabulary from topics like
          science, literature, philosophy, and technology. The 16×16 grid with
          diagonal and backwards words provides genuine difficulty that keeps
          experienced solvers engaged.
        </p>
      </section>

      <section className="card prose no-print">
        <h2>More challenging puzzles</h2>
        <p>
          If you enjoy difficult puzzles, try our{" "}
          <Link href="/hard-word-search">Hard Word Search</Link> for another
          tough grid, or use the{" "}
          <Link href="/word-search-generator">Word Search Generator</Link> to
          create a custom puzzle with your own word list. You can also browse our{" "}
          <Link href="/themed-word-search-puzzles">themed puzzle collection</Link>{" "}
          for topics like science, history, and more.
        </p>
        <ul>
          <li>
            <Link href="/hard-word-search">Hard Word Search</Link> — Diagonal
            and backwards words on a large grid
          </li>
          <li>
            <Link href="/themed-word-search-puzzles">Themed Puzzles</Link> —
            Science, nature, history, and more
          </li>
          <li>
            <Link href="/printable-word-search">Printable Word Search</Link> —
            Print-friendly layouts for offline play
          </li>
          <li>
            <Link href="/daily-word-search">Daily Word Search</Link> — A new
            puzzle every day
          </li>
        </ul>
      </section>
    </div>
  );
}
