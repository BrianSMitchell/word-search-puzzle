import Link from "next/link";
import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { PuzzlePlayer } from "@/components/PuzzlePlayer";
import { seedFromString } from "@/lib/puzzle/rng";
import { HOMEPAGE_WORDS } from "@/lib/puzzle/words";

export const metadata: Metadata = {
  title: "Free Word Search Puzzles Online - Play Instantly (No Download)",
  description:
    "Play free word search puzzles online. No download, no sign-up, just fast puzzle play with daily challenges, printable grids, and a custom generator.",
};

const inlineSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE ?? "";
const sidebarSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR ?? "";

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="reveal">
          <span className="badge">Free, online, no download</span>
          <h1>Free Word Search Puzzles Online</h1>
          <p>
            Play a clean, modern word search puzzle right in your browser. Tap or drag
            across letters to find hidden words, track your progress, and finish a
            full puzzle in minutes.
          </p>
          <p className="hero-links">
            Play free word search puzzles online with no accounts, no downloads, and
            a fresh puzzle every day.
          </p>
          <div className="hero-actions">
            <Link className="button button-solid" href="/daily-word-search">
              Play the daily puzzle
            </Link>
            <Link className="button button-outline" href="/word-search-generator">
              Make your own puzzle
            </Link>
            <Link className="button button-outline" href="/printable-word-search">
              Printable puzzles
            </Link>
          </div>
          <p className="badge">No sign-up. Works entirely in your browser.</p>
          <p className="hero-links">
            Explore the <Link href="/daily-word-search">Daily Word Search</Link>, browse{" "}
            <Link href="/themed-word-search-puzzles">Themed Word Searches</Link>, build a custom grid in
            the <Link href="/word-search-generator">Word Search Generator</Link>, or grab
            a worksheet from{" "}
            <Link href="/printable-word-search">Printable Word Search Puzzles</Link>.
          </p>
          <p className="hero-links">
            Looking for a challenge? Try today&apos;s{" "}
            <Link href="/daily-word-search">Daily Word Search Puzzle</Link>.
          </p>
        </div>
        <div className="reveal reveal-delay-1">
          <PuzzlePlayer
            title="Play a free word search now"
            config={{
              gridSize: 12,
              words: HOMEPAGE_WORDS,
              allowDiagonal: true,
              allowBackwards: true,
            }}
            initialSeed={seedFromString("homepage")}
            newPuzzleLabel="New puzzle"
          />
        </div>
      </section>

      <div className="page-grid">
        <div className="page-main">
          <AdSlot slot={inlineSlot} />
          <section className="card prose">
            <h2>Play free word search puzzles without the clutter</h2>
            <p>
              Word search puzzles should feel relaxing, not frustrating. This site
              keeps the focus on play with fast loading times, smooth touch controls,
              and a clean grid that is easy to read on mobile or desktop. Start with
              the daily challenge for a fresh puzzle every day, or jump straight into
              the generator to build custom word lists for classrooms, parties, or
              practice.
            </p>
            <p>
              Each puzzle is created deterministically so you get consistent results,
              and every page is built for search and share with clear titles, clean
              URLs, and helpful copy. If you like to print, head to the printable page
              for a black-and-white layout that is ready for paper or worksheets.
            </p>
            <p>
              Whether you are a casual player, a teacher, or a parent, you can stay in
              the browser and keep distractions out of the way. The puzzles are fully
              playable on touch screens, keyboard friendly for accessibility, and
              designed to load fast even on low-end devices.
            </p>
          </section>
        </div>
        <aside className="page-aside">
          <AdSlot slot={sidebarSlot} />
          <section className="card">
            <h3>Explore more puzzles</h3>
            <div className="prose">
              <p>
                Try the daily word search for a fresh grid, build a custom puzzle for
                your group, or print a clean worksheet to use offline.
              </p>
            </div>
            <div className="hero-actions">
              <Link className="button button-solid" href="/daily-word-search">
                Daily word search
              </Link>
              <Link className="button button-outline" href="/word-search-generator">
                Word search generator
              </Link>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
