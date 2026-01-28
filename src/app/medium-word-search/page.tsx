import { PuzzlePlayer } from "@/components/PuzzlePlayer";
import { getDifficultyBySlug, getDifficultySeed } from "@/lib/puzzle/difficulties";
import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const difficulty = getDifficultyBySlug("medium");

export const metadata: Metadata = {
  title: "Medium Word Search Puzzle - Free Online Game",
  description:
    "Play a medium word search puzzle online with diagonal words and a larger grid. Free and fast with no download.",
  alternates: {
    canonical: `${siteUrl}/medium-word-search`,
  },
};

export default function MediumWordSearchPage() {
  if (!difficulty) {
    return null;
  }

  return (
    <div className="page">
      <section className="hero hero-tool">
        <div className="reveal">
          <span className="badge">Medium word search</span>
          <h1>{difficulty.title}</h1>
          <p>{difficulty.description}</p>
          <div className="hero-actions">
            <Link className="button button-solid" href="/daily-word-search">
              Daily word search
            </Link>
            <Link className="button button-outline" href="/word-search-generator">
              Make your own puzzle
            </Link>
            <Link className="button button-outline" href="/themed-word-search-puzzles">
              Themed puzzles
            </Link>
          </div>
          <p className="hero-links">
            Want an easier grid? Try the{" "}
            <Link href="/easy-word-search">Easy Word Search</Link>.
          </p>
        </div>
        <div className="reveal reveal-delay-1">
          <PuzzlePlayer
            title="Medium puzzle"
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
        <h2>A balanced word search challenge</h2>
        <p>
          Medium word searches add diagonal words and a larger grid size, creating a
          satisfying challenge without feeling overwhelming. This is a great option
          for regular players who want a little more variety.
        </p>
        <p>
          If you are ready for a tougher puzzle, try the hard version with backwards
          words enabled.
        </p>
      </section>
    </div>
  );
}
