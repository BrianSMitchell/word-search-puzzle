import { PuzzlePlayer } from "@/components/PuzzlePlayer";
import {
    getThemedPageBySlug,
    getThemedPageSeed,
    getThemedPageSlugs,
} from "@/lib/puzzle/themedPages";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ThemePageProps = {
  params: Promise<{
    theme: string;
  }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return getThemedPageSlugs().map((theme) => ({ theme }));
}

export async function generateMetadata({ params }: ThemePageProps): Promise<Metadata> {
  const { theme: themeSlug } = await params;
  const theme = getThemedPageBySlug(themeSlug);
  if (!theme) {
    return { title: "Themed Word Search Puzzle" };
  }
  return {
    title: `${theme.title} – Free & Printable Online`,
    description: theme.description,
  };
}

export default async function ThemedWordSearchPage({ params }: ThemePageProps) {
  const { theme: themeSlug } = await params;
  const theme = getThemedPageBySlug(themeSlug);
  if (!theme) {
    notFound();
  }

  const siblings = theme.siblingSlugs
    .map((slug) => getThemedPageBySlug(slug))
    .filter((entry): entry is Exclude<typeof entry, undefined> => Boolean(entry));

  return (
    <div className="page">
      <section className="hero">
        <div className="reveal no-print">
          <span className="badge">{theme.name} puzzles</span>
          <h1>{theme.title}</h1>
          {theme.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="hero-actions">
            <Link className="button button-solid" href="/word-search-generator">
              Generate a new puzzle
            </Link>
            <Link className="button button-outline" href="/printable-word-search">
              Printable version
            </Link>
            <Link className="button button-outline" href="/daily-word-search">
              Daily word search
            </Link>
          </div>
          <p className="hero-links">
            Hit the <strong>New puzzle</strong> button in the grid to cycle layouts, then share the page or print a worksheet.
          </p>
          <p className="hero-links">
            Explore more themed word search puzzles from the <Link href="/themed-word-search-puzzles">theme hub</Link> or the <Link href="/">homepage</Link>.
          </p>
        </div>
        <div className="reveal reveal-delay-1">
          <PuzzlePlayer
            title={`${theme.name} puzzle`}
            config={{
              gridSize: theme.gridSize,
              words: theme.words,
              allowDiagonal: theme.allowDiagonal,
              allowBackwards: theme.allowBackwards,
            }}
            initialSeed={getThemedPageSeed(theme.slug)}
            newPuzzleLabel="New puzzle"
          />
        </div>
      </section>

      <section className="card prose no-print">
        <h2>About this puzzle</h2>
        <p>
          {theme.description} The grid size is {theme.gridSize}×{theme.gridSize}, and we keep the word list contained to {theme.words.length} themed entries so completes stay quick.
        </p>
        <p>
          The combination of above-the-fold play, short copy, and tight word lists lets this page behave like a repeatable intent page that can keep ranking as you add more topics.
        </p>
      </section>

      <section className="card no-print">
        <h3>Word list</h3>
        <div className="word-list-grid">
          {theme.words.map((word) => (
            <span key={word} className="word-list-item">
              {word}
            </span>
          ))}
        </div>
      </section>

      <section className="card prose no-print">
        <h2>Who these puzzles are for</h2>
        <ul>
          {theme.whoThisFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card prose no-print">
        <h2>Need more puzzles?</h2>
        <p>
          Play the <Link href="/daily-word-search">Daily Word Search</Link>, build your own grid in the{" "}
          <Link href="/word-search-generator">generator</Link>, or grab clean{" "}
          <Link href="/printable-word-search">printable puzzles</Link> for worksheets.
        </p>
        <p>
          Looking for adjacent topics? Try {siblings
            .map((sibling, index) => (
              <span key={sibling.slug}>
                {index > 0 && ", "}
                <Link href={`/themed-word-search-puzzles/${sibling.slug}`}>
                  {sibling.title}
                </Link>
              </span>
            ))}
          .
        </p>
      </section>
    </div>
  );
}
