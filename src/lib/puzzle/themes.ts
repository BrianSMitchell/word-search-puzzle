import { seedFromString } from "./rng";
import { getWordsByTags } from "./wordPool";
import { normalizeWords } from "./words";

export type ThemeConfig = {
  slug: string;
  name: string;
  title: string;
  description: string;
  wordTags: string[];
  words: string[];
  gridSize: number;
  allowDiagonal: boolean;
  allowBackwards: boolean;
};

const RAW_THEMES: Omit<ThemeConfig, "words">[] = [
  {
    slug: "animals",
    name: "Animals",
    title: "Animals Word Search",
    description:
      "Find animal names in this free word search puzzle. Play online or print the worksheet for classrooms and kids.",
    wordTags: ["animals"],
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
  },
  {
    slug: "sports",
    name: "Sports",
    title: "Sports Word Search",
    description:
      "Play a sports word search puzzle with popular games, gear, and action words. Free online and printable.",
    wordTags: ["sports"],
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
  },
  {
    slug: "food",
    name: "Food",
    title: "Food Word Search",
    description:
      "Find food and kitchen words in this tasty word search puzzle. Free to play online or print for class.",
    wordTags: ["food"],
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
  },
  {
    slug: "science",
    name: "Science",
    title: "Science Word Search",
    description:
      "Explore a science word search puzzle with lab, planet, and experiment vocabulary. Free online or printable.",
    wordTags: ["science"],
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
  },
  {
    slug: "geography",
    name: "Geography",
    title: "Geography Word Search",
    description:
      "A geography word search puzzle with map and travel words. Free to play online or print for classrooms.",
    wordTags: ["geography"],
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
  },
  {
    slug: "holidays",
    name: "Holidays",
    title: "Holidays Word Search",
    description:
      "Celebrate the season with a holiday word search puzzle. Free, printable, and ready to play in your browser.",
    wordTags: ["holiday"],
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
  },
  {
    slug: "bible",
    name: "Bible",
    title: "Bible Word Search",
    description:
      "A Bible-themed word search with familiar words and stories. Free to play online or print for study groups.",
    wordTags: ["bible"],
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
  },
  {
    slug: "christmas",
    name: "Christmas",
    title: "Christmas Word Search",
    description:
      "Play a festive Christmas word search puzzle online or print it for holiday worksheets and family fun.",
    wordTags: ["christmas"],
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
  },
];

export const THEMES: ThemeConfig[] = RAW_THEMES.map((theme) => ({
  ...theme,
  words: normalizeWords(getWordsByTags(theme.wordTags), theme.gridSize),
}));

export function getThemeBySlug(slug: string): ThemeConfig | undefined {
  return THEMES.find((theme) => theme.slug === slug);
}

export function getThemeSeed(slug: string): number {
  return seedFromString(`theme-${slug}`);
}

export function getThemeSlugs(): string[] {
  return THEMES.map((theme) => theme.slug);
}
