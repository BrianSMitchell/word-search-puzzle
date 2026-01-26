import { AdSlot } from "@/components/AdSlot";
import { FAQSection } from "@/components/FAQSection";
import { QuickPlayChallenge } from "@/components/QuickPlayChallenge";
import { FAQSchema, GameSchema } from "@/components/Schema";
import { getCommonFAQs } from "@/lib/puzzle/faqData";
import { siteUrl } from "@/lib/site";
import { HOMEPAGE_WORDS } from "@/lib/puzzle/words";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Word Search Puzzles Online - Play Instantly (No Download)",
  description:
    "Play free word search puzzles online. No download, no sign-up, just fast puzzle play with daily challenges, printable grids, and a custom generator.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Free Word Search Puzzles Online - Play Instantly",
    description:
      "Play free word search puzzles online. No download, no sign-up, just fast puzzle play with daily challenges, printable grids, and a custom generator.",
    type: "website",
    images: ["/api/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Word Search Puzzles Online",
    description: "Play free word search puzzles online. No download, no sign-up required.",
    images: ["/api/og"],
  },
};

const inlineSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE ?? "";
const sidebarSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR ?? "";

export default function HomePage() {
  const faqs = getCommonFAQs();

  return (
    <div className="page">
      {/* Schema Markup */}
      <GameSchema
        name="Free Word Search Puzzles Online"
        description="Play free word search puzzles online with daily challenges, themed puzzles, printable worksheets, and a custom puzzle generator."
        url="/"
        genre="Word Search Puzzle"
      />
      <FAQSchema items={faqs} />

      {/* HERO: Minimal intro + immediate puzzle */}
      <section className="hero hero-play">
        <div className="reveal hero-intro">
          <span className="badge">Free • No sign-up • Play instantly</span>
          <h1>Free Word Search Puzzles</h1>
          <p className="hero-tagline">
            Can you find all the hidden words before time runs out?
          </p>
        </div>
        
        {/* THE PUZZLE - Front and center */}
        <div className="reveal reveal-delay-1">
          <QuickPlayChallenge
            config={{
              gridSize: 10,
              words: HOMEPAGE_WORDS,
              allowDiagonal: true,
              allowBackwards: true,
            }}
            timeLimitSeconds={60}
          />
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="quick-nav reveal reveal-delay-2">
        <div className="quick-nav-grid">
          <Link href="/daily-word-search" className="quick-nav-card">
            <span className="quick-nav-icon">📅</span>
            <span className="quick-nav-label">Daily Puzzle</span>
            <span className="quick-nav-desc">New challenge every day</span>
          </Link>
          <Link href="/word-search-generator" className="quick-nav-card">
            <span className="quick-nav-icon">✏️</span>
            <span className="quick-nav-label">Create Your Own</span>
            <span className="quick-nav-desc">Custom word lists</span>
          </Link>
          <Link href="/printable-word-search" className="quick-nav-card">
            <span className="quick-nav-icon">🖨️</span>
            <span className="quick-nav-label">Printable</span>
            <span className="quick-nav-desc">PDF worksheets</span>
          </Link>
          <Link href="/themed-word-search-puzzles" className="quick-nav-card">
            <span className="quick-nav-icon">🎨</span>
            <span className="quick-nav-label">Themed Puzzles</span>
            <span className="quick-nav-desc">Animals, holidays & more</span>
          </Link>
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

          {/* FAQ Section */}
          <FAQSection items={faqs} />
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
