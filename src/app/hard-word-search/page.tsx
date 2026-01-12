import Link from "next/link";
import type { Metadata } from "next";
import { PuzzlePlayer } from "@/components/PuzzlePlayer";
import { getDifficultyBySlug, getDifficultySeed } from "@/lib/puzzle/difficulties";

const difficulty = getDifficultyBySlug("hard");

export const metadata: Metadata = {
  title: "Hard Word Search Puzzle - Free Online Game",
  description:
    "Play a hard word search puzzle online with diagonal and backwards words. Free to play, no download required.",
};

export default function HardWordSearchPage() {
  if (!difficulty) {
    return null;
  }

  return (
    <div className="page">
      <section className="hero">
        <div className="reveal">
          <span className="badge">Hard word search</span>
          <h1>{difficulty.title}</h1>
          <p>{difficulty.description}</p>
          <div className="hero-actions">
            <Link className="button button-solid" href="/daily-word-search">
              Daily word search
            </Link>
            <Link className="button button-outline" href="/word-search-generator">
              Make your own puzzle
            </Link>
            <Link className="button button-outline" href="/word-search">
              Themed puzzles
            </Link>
          </div>
          <p className="hero-links">
            Need something easier? Try the{" "}
            <Link href="/medium-word-search">Medium Word Search</Link>.
          </p>
        </div>
        <div className="reveal reveal-delay-1">
          <PuzzlePlayer
            title="Hard puzzle"
            config={{
              gridSize: difficulty.gridSize,
              words: difficulty.words,
              allowDiagonal: difficulty.allowDiagonal,
              allowBackwards: difficulty.allowBackwards,
            }}
            initialSeed={getDifficultySeed(difficulty.slug)}
            newPuzzleLabel="New layout"
          />
        </div>
      </section>

      <section className="card prose">
        <h2>Hard word search for advanced players</h2>
        <p>
          Hard word searches include longer words, diagonal placements, and backwards
          words. If you like to hunt in every direction, this is the best challenge.
        </p>
        <p>
          Want a custom puzzle at this difficulty? Use the generator and turn on
          diagonal and backwards words.
        </p>
      </section>
    </div>
  );
}
