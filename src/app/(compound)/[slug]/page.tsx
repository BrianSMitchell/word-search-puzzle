import { FAQSection } from "@/components/FAQSection";
import { PuzzlePlayer } from "@/components/PuzzlePlayer";
import {
  BreadcrumbSchema,
  FAQSchema,
  GameSchema,
} from "@/components/Schema";
import {
  getCompoundPageBySlug,
  getCompoundPageSlugs,
} from "@/lib/puzzle/compoundPages";
import { getCommonFAQs } from "@/lib/puzzle/faqData";
import { seedFromString } from "@/lib/puzzle/rng";
import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type CompoundPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getCompoundPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CompoundPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getCompoundPageBySlug(slug);
  if (!page) {
    return { title: "Word Search Puzzle" };
  }
  return {
    title: `${page.title} – Free Online`,
    description: page.description,
    alternates: {
      canonical: `${siteUrl}/${slug}`,
    },
    openGraph: {
      title: `${page.title} – Free Online`,
      description: page.description,
      type: "website",
      images: [`/api/og?title=${encodeURIComponent(page.title)}`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} – Free Online`,
      description: page.description,
      images: [`/api/og?title=${encodeURIComponent(page.title)}`],
    },
  };
}

export default async function CompoundWordSearchPage({ params }: CompoundPageProps) {
  const { slug } = await params;
  const page = getCompoundPageBySlug(slug);
  if (!page) {
    notFound();
  }

  const faqs = getCommonFAQs();
  const seed = seedFromString(`compound-${slug}`);

  return (
    <div className="page">
      {/* Schema Markup */}
      <GameSchema
        name={page.title}
        description={page.description}
        url={`/${page.slug}`}
        genre="Word Search Puzzle"
        audience={page.audienceLabel}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: page.title, url: `/${page.slug}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <section className="hero hero-tool">
        <div className="reveal no-print">
          <span className="badge">Free online puzzle</span>
          <h1>{page.h1}</h1>
          {page.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="hero-actions">
            <Link className="button button-solid" href="/word-search-generator">
              Make your own puzzle
            </Link>
            <Link className="button button-outline" href="/printable-word-search">
              Printable puzzles
            </Link>
            <Link className="button button-outline" href="/daily-word-search">
              Daily word search
            </Link>
          </div>
          <p className="hero-links">
            Click <strong>New puzzle</strong> to generate a fresh layout, or print a clean worksheet for offline use.
          </p>
        </div>
        <div className="reveal reveal-delay-1">
          <PuzzlePlayer
            title={page.title}
            config={{
              gridSize: page.gridSize!,
              words: page.words,
              allowDiagonal: page.allowDiagonal!,
              allowBackwards: page.allowBackwards!,
            }}
            initialSeed={seed}
            newPuzzleLabel="New puzzle"
          />
        </div>
      </section>

      <section className="card prose no-print">
        <h2>About this puzzle</h2>
        <p>
          {page.description} This puzzle uses a {page.gridSize}×{page.gridSize} grid with {page.words.length} themed words.
          {!page.allowDiagonal && !page.allowBackwards && " Words only go horizontally and vertically for easier gameplay."}
          {page.allowDiagonal && page.allowBackwards && " Words can appear in any direction, including backwards and diagonally."}
        </p>
      </section>

      <section className="card no-print">
        <h3>Word list</h3>
        <div className="word-list-grid">
          {page.words.map((word) => (
            <span key={word} className="word-list-item">
              {word}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection items={faqs} />

      <section className="card prose no-print">
        <h2>More word search puzzles</h2>
        <p>
          Explore our <Link href="/themed-word-search-puzzles">themed word search collection</Link> for more topics, 
          try the <Link href="/daily-word-search">daily word search</Link> for a fresh challenge, 
          or create a <Link href="/word-search-generator">custom puzzle</Link> with your own words.
        </p>
        <div className="hero-actions" style={{ marginTop: "1rem" }}>
          <Link className="button button-outline" href="/themed-word-search-puzzles/kids">
            Kids puzzles
          </Link>
          <Link className="button button-outline" href="/themed-word-search-puzzles/easy">
            Easy puzzles
          </Link>
          <Link className="button button-outline" href="/themed-word-search-puzzles/holidays">
            Holiday puzzles
          </Link>
        </div>
      </section>
    </div>
  );
}
