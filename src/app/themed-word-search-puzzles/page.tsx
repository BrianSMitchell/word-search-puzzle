import { ThemeBuilderForm } from "@/components/ThemeBuilderForm";
import { THEMED_PAGES, ThemeCategory } from "@/lib/puzzle/themedPages";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Themed Word Search Puzzles – Free & Printable Games",
  description:
    "Choose a themed word search puzzle, play instantly, and print worksheets for classrooms or family time. Each theme is built to rank with clear copy and internal links.",
};

// Group themes by category with display info
const CATEGORY_CONFIG: Record<ThemeCategory, { icon: string; label: string; order: number }> = {
  general: { icon: "📖", label: "General English", order: 1 },
  education: { icon: "📚", label: "Education & Learning", order: 2 },
  holiday: { icon: "🎉", label: "Holidays & Seasons", order: 3 },
  animals: { icon: "🐾", label: "Animals & Nature", order: 4 },
  nature: { icon: "🌿", label: "Nature & Outdoors", order: 5 },
  lifestyle: { icon: "🍕", label: "Lifestyle & Fun", order: 6 },
  audience: { icon: "👤", label: "For Specific Audiences", order: 7 },
  difficulty: { icon: "🎯", label: "By Difficulty Level", order: 8 },
};

function groupThemesByCategory() {
  const groups: Record<ThemeCategory, typeof THEMED_PAGES> = {
    general: [],
    education: [],
    holiday: [],
    animals: [],
    nature: [],
    lifestyle: [],
    audience: [],
    difficulty: [],
  };

  for (const theme of THEMED_PAGES) {
    groups[theme.category].push(theme);
  }

  return Object.entries(groups)
    .filter(([, themes]) => themes.length > 0)
    .sort(([a], [b]) => CATEGORY_CONFIG[a as ThemeCategory].order - CATEGORY_CONFIG[b as ThemeCategory].order)
    .map(([category, themes]) => ({
      category: category as ThemeCategory,
      config: CATEGORY_CONFIG[category as ThemeCategory],
      themes,
    }));
}

export default function ThemedWordSearchHubPage() {
  const categoryGroups = groupThemesByCategory();

  return (
    <div className="page">
      <section className="hero" style={{ display: "block" }}>
        <div className="reveal">
          <span className="badge">Themed word searches</span>
          <h1>Themed Word Search Puzzles</h1>
          <p style={{ maxWidth: "600px" }}>
            Choose a theme below and start playing instantly. Every puzzle is free, 
            printable, and optimized for classrooms, parties, or quiet time.
          </p>
          <div className="hero-actions" style={{ marginBottom: "2rem" }}>
            <Link className="button button-solid" href="/daily-word-search">
              Daily word search
            </Link>
            <Link className="button button-outline" href="/word-search-generator">
              Create your own
            </Link>
          </div>
        </div>
      </section>

      <div className="theme-categories reveal reveal-delay-1">
        {categoryGroups.map(({ category, config, themes }) => (
          <div key={category} className="theme-category">
            <div className="theme-category-header">
              <span className="theme-category-icon">{config.icon}</span>
              <h2 className="theme-category-title">{config.label}</h2>
            </div>
            <div className="theme-category-grid">
              {themes.map((theme) => (
                <Link
                  key={theme.slug}
                  className="button button-outline"
                  href={`/themed-word-search-puzzles/${theme.slug}`}
                >
                  {theme.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="card prose reveal reveal-delay-2">
        <h2>Why these themed pages matter</h2>
        <p>
          Every themed page targets a unique keyword, opens with real copy, and immediately 
          anchors the puzzle above the fold. That keeps the experience fast for players 
          and gives Google a repeatable template that scales.
        </p>
        <p className="hero-links">
          Want to create a custom word list? Jump to the{" "}
          <Link href="/word-search-generator">Word Search Generator</Link>, grab a printable 
          copy from <Link href="/printable-word-search">Printable Word Search Puzzles</Link>, 
          or play the fresh <Link href="/daily-word-search">Daily Word Search</Link>.
        </p>
      </section>

      <ThemeBuilderForm />
    </div>
  );
}
