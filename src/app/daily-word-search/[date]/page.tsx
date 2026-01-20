import { AdSlot } from "@/components/AdSlot";
import { PuzzleBoard } from "@/components/PuzzleBoard";
import { ShareButton } from "@/components/ShareButton";
import { getDailySeed, getDailyWords, getRecentDateKeys } from "@/lib/puzzle/daily";
import { generatePuzzle } from "@/lib/puzzle/generator";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type DailyPageProps = {
  params: Promise<{
    date: string;
  }>;
};

const inlineSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE ?? "";
const sidebarSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR ?? "";

export const dynamicParams = false;

function isValidDateKey(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }
  const parsed = Date.parse(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed);
}

export function generateStaticParams() {
  return getRecentDateKeys(30).map((date) => ({ date }));
}

export async function generateMetadata({ params }: DailyPageProps): Promise<Metadata> {
  const { date } = await params;
  if (!isValidDateKey(date)) {
    return { title: "Daily Word Search Puzzle" };
  }
  return { title: `Daily Word Search Puzzle - ${date}` };
}

export default async function DailyPage({ params }: DailyPageProps) {
  const { date } = await params;
  
  if (!isValidDateKey(date)) {
    return notFound();
  }

  const dateKey = date;

  const words = await getDailyWords(dateKey);
  const seed = await getDailySeed(dateKey);
  const puzzle = generatePuzzle({
    seed,
    gridSize: 15,
    words,
    allowDiagonal: true,
    allowBackwards: true,
  });

  const archiveDates = getRecentDateKeys(30).filter((d) => d !== dateKey);

  return (
    <div className="page-container">
      <section className="hero">
        <div className="hero-content">
          <span className="badge">Daily word search archive</span>
          <h1>Daily Word Search Puzzle</h1>
          <p>
            You are viewing the daily puzzle for {dateKey}. The puzzle is frozen for
            this date so you can replay it anytime.
          </p>
          <div className="hero-actions">
            <ShareButton />
            <Link className="button button-outline" href="/daily-word-search">
              Back to today
            </Link>
          </div>
        </div>
        <div className="reveal reveal-delay-1">
          <PuzzleBoard puzzle={puzzle} title={`Daily puzzle - ${dateKey}`} />
        </div>
      </section>

      <div className="page-grid">
        <div className="page-main">
          <AdSlot slot={inlineSlot} />
          <section className="card prose">
            <h2>Replay a past daily puzzle</h2>
            <p>
              Every daily puzzle is generated from a date-based seed so the grid stays
              consistent. That means you can replay a previous day, share it with
              friends, or run the same puzzle in a classroom.
            </p>
            <p>
              Looking for the newest challenge? Return to the main daily page for
              today&apos;s puzzle, or jump to the generator to create your own custom
              word list.
            </p>
            <p>
              Archive puzzles are perfect for catching up on missed days or keeping a
              set of consistent word searches for lesson plans. Each one is fast,
              mobile friendly, and ready to share.
            </p>
          </section>
          <section className="card">
            <h3>More archive dates</h3>
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
            <h3>Keep playing</h3>
            <div className="prose">
              <p>
                Build a word search with your own words or print a clean grid for
                offline play.
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
