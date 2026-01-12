import Link from "next/link";
import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { PrintablePuzzle } from "@/components/PrintablePuzzle";
import { PrintButton } from "@/components/PrintButton";
import { PdfDownloadButton } from "@/components/PdfDownloadButton";
import { generatePuzzle } from "@/lib/puzzle/generator";
import { seedFromString } from "@/lib/puzzle/rng";
import { PRINTABLE_WORDS } from "@/lib/puzzle/words";

export const metadata: Metadata = {
  title: "Printable Word Search Puzzles (Free PDFs)",
  description:
    "Printable word search puzzles for teachers, parents, and students. Free layouts, clean black-and-white grids, and no download required.",
};

const inlineSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE ?? "";
const sidebarSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR ?? "";

export default function PrintableWordSearchPage() {
  const puzzle = generatePuzzle({
    seed: seedFromString("printable"),
    gridSize: 15,
    words: PRINTABLE_WORDS,
    allowDiagonal: false,
    allowBackwards: false,
  });

  return (
    <div className="page">
      <section className="hero">
        <div className="reveal">
          <span className="badge">Printable word search puzzles</span>
          <h1>Printable Word Search Puzzles</h1>
          <p>
            Print a clean, black-and-white word search puzzle in one click. This page
            is built for classrooms, family activities, and offline puzzle sessions.
          </p>
          <div className="hero-actions">
            <PrintButton label="Print this puzzle" />
            <PdfDownloadButton puzzle={puzzle} title="Printable Word Search Puzzle" />
            <Link className="button button-outline" href="/word-search-generator">
              Make your own puzzle
            </Link>
          </div>
        </div>
        <div className="reveal reveal-delay-1">
          <PrintablePuzzle
            puzzle={puzzle}
            title="Classroom ready puzzle"
            description="Use this puzzle as a worksheet or handout. Answer key not required."
          />
        </div>
      </section>

      <div className="page-grid">
        <div className="page-main">
          <AdSlot slot={inlineSlot} />
          <section className="card prose">
            <h2>Free printable word search puzzles</h2>
            <p>
              This printable layout keeps everything crisp and readable. The grid uses
              high-contrast letters, a simple word list, and generous spacing so it is
              easy to use in classrooms or at home. Print the current puzzle as many
              times as you need, or customize one with your own words in the generator.
            </p>
            <p>
              Printable puzzles are great for lesson warmups, vocabulary practice, or
              quiet-time activities. If you prefer to play online, switch to the daily
              puzzle for a fresh word search each day.
            </p>
            <p>
              The layout is designed to stay clean in black and white, with no ads or
              extra UI elements on the page when printing. Just click print and you are
              ready to hand out the worksheet.
            </p>
          </section>
        </div>
        <aside className="page-aside">
          <AdSlot slot={sidebarSlot} />
          <section className="card">
            <h3>More puzzle options</h3>
            <div className="prose">
              <p>
                Play a daily puzzle online, or build a custom word search for your
                group.
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
