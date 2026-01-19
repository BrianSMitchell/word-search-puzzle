import { getRelatedThemes, ThemedPageConfig } from "@/lib/puzzle/themedPages";
import Link from "next/link";

type RelatedThemesProps = {
  currentSlug: string;
};

export function RelatedThemes({ currentSlug }: RelatedThemesProps) {
  const related = getRelatedThemes(currentSlug, 6);

  if (related.length === 0) return null;

  return (
    <section className="card" style={{ marginTop: "2rem" }}>
      <h2>More Word Search Puzzles</h2>
      <p className="prose" style={{ marginBottom: "1rem" }}>
        Try another themed puzzle or explore a different difficulty level.
      </p>
      <div className="related-themes-grid">
        {related.map((theme: ThemedPageConfig) => (
          <Link
            key={theme.slug}
            href={`/themed-word-search-puzzles/${theme.slug}`}
            className="related-theme-link"
          >
            {theme.name} Word Search
          </Link>
        ))}
      </div>
      <style jsx>{`
        .related-themes-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
      `}</style>
    </section>
  );
}
