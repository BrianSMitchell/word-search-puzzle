import Link from "next/link";
import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { PuzzleBoard } from "@/components/PuzzleBoard";
import { ShareButton } from "@/components/ShareButton";
import { generatePuzzle } from "@/lib/puzzle/generator";
import { getDailySeed, getDailyWords, getDateKey, getRecentDateKeys } from "@/lib/puzzle/daily";

export const metadata: Metadata = {
  title: "Daily Word Search Puzzle - New Free Puzzle Every Day",
  description:
    "Daily word search puzzle with a new free grid every day. Play online with no download, share the link, and explore previous puzzles.",
};

export const revalidate = 3600;

const inlineSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE ?? "";
const sidebarSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR ?? "";

export default function DailyWordSearchPage() {
  const dateKey = getDateKey(new Date());
  const words = getDailyWords(dateKey);
  const puzzle = generatePuzzle({
    seed: getDailySeed(dateKey),
    gridSize: 14,
    words,
    allowDiagonal: true,
    allowBackwards: true,
  });
  const archiveDates = getRecentDateKeys(14).slice(1);

  return (
    <div className="page">
      <section className="hero">
        <div className="reveal">
          <span className="badge">Daily word search</span>
          <h1>Daily Word Search Puzzle</h1>
          <p>
            Come back each day for a new word search puzzle with a fresh layout. Today
            is {dateKey}, and the grid below is seeded to stay consistent throughout
            the day.
          </p>
          <div className="hero-actions">
            <ShareButton />
            <Link className="button button-outline" href="/word-search-generator">
              Build a custom puzzle
            </Link>
          </div>
          <p className="hero-links">
            Play a free daily word search online with no sign-up or download. Try the{" "}
            <Link href="/word-search-generator">Word Search Generator</Link>, browse{" "}
            <Link href="/word-search">Themed Word Searches</Link>, or grab{" "}
            <Link href="/printable-word-search">Printable Word Search Puzzles</Link> for
            custom and offline play.
          </p>
        </div>
        <div className="reveal reveal-delay-1">
          <PuzzleBoard puzzle={puzzle} title="Daily puzzle" />
        </div>
      </section>

      <div className="page-grid">
        <div className="page-main">
          <AdSlot slot={inlineSlot} />
          <section className="card prose">
            <h2>Your daily word search, ready in seconds</h2>
            <p>
              This daily word search keeps the experience simple: tap or drag to mark
              a word, track your progress in the word list, and reset whenever you
              want another go. The puzzle updates every day, so you always have a new
              challenge without needing an account or download.
            </p>
            <p>
              Use the share button to send today&apos;s puzzle to friends, students,
              or family. Looking for more? Try the generator to create themed lists,
              or visit the printable page for a clean layout that works on paper.
            </p>
            <p>
              Because the daily puzzle is seeded by date, you can open it on different
              devices and see the same grid. That makes it easy to play together or
              assign a shared challenge in a classroom or group setting.
            </p>
          </section>
          <section className="card">
            <h3>Previous daily puzzles</h3>
            <div className="prose">
              <p>Select a recent date to replay a past daily puzzle.</p>
            </div>
            <div className="hero-actions">
              {archiveDates.map((date) => (
                <Link key={date} className="button button-outline" href={`/daily-word-search/${date}`}>
                  {date}
                </Link>
              ))}
            </div>
          </section>
        </div>
        <aside className="page-aside">
          <AdSlot slot={sidebarSlot} />
          <section className="card">
            <h3>More ways to play</h3>
            <div className="prose">
              <p>
                Build a custom puzzle from your own word list, or switch to printable
                mode for offline sessions and classroom worksheets.
              </p>
            </div>
            <div className="hero-actions">
              <Link className="button button-solid" href="/word-search-generator">
                Word search generator
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
