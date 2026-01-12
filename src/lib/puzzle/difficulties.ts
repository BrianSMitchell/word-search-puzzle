import { seedFromString } from "./rng";
import { normalizeWords } from "./words";

export type DifficultyConfig = {
  slug: "easy" | "medium" | "hard";
  path: string;
  title: string;
  description: string;
  words: string[];
  gridSize: number;
  allowDiagonal: boolean;
  allowBackwards: boolean;
};

const BASE_WORDS = [
  "puzzle",
  "search",
  "letters",
  "grid",
  "find",
  "focus",
  "brain",
  "skill",
  "pattern",
  "solve",
  "daily",
  "challenge",
  "classic",
  "game",
  "logic",
  "memory",
];

const RAW_DIFFICULTIES: DifficultyConfig[] = [
  {
    slug: "easy",
    path: "/easy-word-search",
    title: "Easy Word Search Puzzle",
    description:
      "Play an easy word search puzzle online. Shorter words and straight lines make this version great for beginners.",
    words: BASE_WORDS.slice(0, 10),
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
  },
  {
    slug: "medium",
    path: "/medium-word-search",
    title: "Medium Word Search Puzzle",
    description:
      "A medium word search puzzle with a larger grid and diagonal words. Free to play online with no download.",
    words: BASE_WORDS.slice(0, 12),
    gridSize: 12,
    allowDiagonal: true,
    allowBackwards: false,
  },
  {
    slug: "hard",
    path: "/hard-word-search",
    title: "Hard Word Search Puzzle",
    description:
      "Try a hard word search puzzle with longer words, diagonal lines, and backwards placements.",
    words: BASE_WORDS,
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
  },
];

export const DIFFICULTIES: DifficultyConfig[] = RAW_DIFFICULTIES.map((difficulty) => ({
  ...difficulty,
  words: normalizeWords(difficulty.words, difficulty.gridSize),
}));

export function getDifficultyBySlug(slug: DifficultyConfig["slug"]) {
  return DIFFICULTIES.find((difficulty) => difficulty.slug === slug);
}

export function getDifficultySeed(slug: string): number {
  return seedFromString(`difficulty-${slug}`);
}
