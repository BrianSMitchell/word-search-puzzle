import { PuzzlePlayer } from "@/components/PuzzlePlayer";
import { getThemeBySlug, getThemeSeed, getThemeSlugs } from "@/lib/puzzle/themes";
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
  return getThemeSlugs().map((theme) => ({ theme }));
}

export async function generateMetadata({ params }: ThemePageProps): Promise<Metadata> {
  const { theme: themeSlug } = await params;
  const theme = getThemeBySlug(themeSlug);
  if (!theme) {
    return { title: "Themed Word Search Puzzle" };
  }
  return {
    title: `${theme.title} - Free Online Puzzle`,
    description: `${theme.description} Play free online with no download required.`,
  };
}

export default async function ThemeWordSearchPage({ params }: ThemePageProps) {
  const { theme: themeSlug } = await params;
  const theme = getThemeBySlug(themeSlug);
  if (!theme) {
    notFound();
  }

  return (
    <div className="page">
      <section className="hero hero-tool">
        <div className="reveal">
          <span className="badge">{theme.name} word search</span>
          <h1>{theme.title}</h1>
          <p>{theme.description}</p>
          <div className="hero-actions">
            <Link className="button button-solid" href="/daily-word-search">
              Daily word search
            </Link>
            <Link className="button button-outline" href="/word-search-generator">
              Make your own puzzle
            </Link>
            <Link className="button button-outline" href="/printable-word-search">
              Printable puzzles
            </Link>
          </div>
          <p className="hero-links">
            Browse more <Link href="/themed-word-search-puzzles">themed word searches</Link> or try an{" "}
            <Link href="/easy-word-search">easy word search puzzle</Link>.
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
            initialSeed={getThemeSeed(theme.slug)}
            newPuzzleLabel="New layout"
          />
        </div>
      </section>

      <section className="card prose">
        <h2>Free {theme.name.toLowerCase()} word search puzzle</h2>
        <p>
          This {theme.name.toLowerCase()} word search is playable online and designed
          for quick sessions or classroom practice. Highlight words by tapping or
          dragging across the grid, then mark them off the list as you go.
        </p>
        <p>
          Want a new layout with the same theme? Use the new layout button, or visit
          the generator to build a custom word list.
        </p>
      </section>
    </div>
  );
}
