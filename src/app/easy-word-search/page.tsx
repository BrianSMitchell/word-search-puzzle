import Link from "next/link";
import type { Metadata } from "next";
import { PuzzlePlayer } from "@/components/PuzzlePlayer";
import { getDifficultyBySlug, getDifficultySeed } from "@/lib/puzzle/difficulties";

const difficulty = getDifficultyBySlug("easy");

export const metadata: Metadata = {
  title: "Easy Word Search Puzzle - Free Online Game",
  description:
    "Play an easy word search puzzle online. Short words, straight lines, and a beginner-friendly grid with no download.",
};

export default function EasyWordSearchPage() {
  if (!difficulty) {
    return null;
  }

  return (
    <div className="page">
      <section className="hero">
        <div className="reveal">
          <span className="badge">Easy word search</span>
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
            Looking for a tougher challenge? Try the{" "}
            <Link href="/medium-word-search">Medium Word Search</Link>.
          </p>
        </div>
        <div className="reveal reveal-delay-1">
          <PuzzlePlayer
            title="Easy puzzle"
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
        <h2>Beginner-friendly word search</h2>
        <p>
          This easy word search uses a smaller grid and straight-line words so new
          players can finish quickly. It is perfect for younger puzzle fans, ESL
          learners, or anyone who wants a relaxed challenge.
        </p>
        <p>
          If you want something harder, move up to the medium or hard puzzles, or
          visit the generator to build your own custom list.
        </p>
      </section>
    </div>
  );
}
