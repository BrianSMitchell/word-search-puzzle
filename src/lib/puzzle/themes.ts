import { seedFromString } from "./rng";
import { normalizeWords } from "./words";

export type ThemeConfig = {
  slug: string;
  name: string;
  title: string;
  description: string;
  words: string[];
  gridSize: number;
  allowDiagonal: boolean;
  allowBackwards: boolean;
};

const RAW_THEMES: ThemeConfig[] = [
  {
    slug: "animals",
    name: "Animals",
    title: "Animals Word Search",
    description:
      "Find animal names in this free word search puzzle. Play online or print the worksheet for classrooms and kids.",
    words: [
      "lion",
      "tiger",
      "elephant",
      "giraffe",
      "zebra",
      "otter",
      "panda",
      "eagle",
      "rabbit",
      "wolf",
      "turtle",
      "monkey",
    ],
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
    words: [
      "holiday",
      "celebrate",
      "parade",
      "family",
      "travel",
      "tradition",
      "lights",
      "ornament",
      "feast",
      "winter",
      "gather",
      "cheer",
    ],
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
    words: [
      "faith",
      "grace",
      "covenant",
      "prophet",
      "psalm",
      "gospel",
      "apostle",
      "parables",
      "temple",
      "mercy",
      "disciple",
      "wisdom",
    ],
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
    words: [
      "snowman",
      "sleigh",
      "carol",
      "gingerbread",
      "stocking",
      "evergreen",
      "candle",
      "reindeer",
      "northpole",
      "jingle",
      "ornament",
      "holiday",
    ],
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
  },
];

export const THEMES: ThemeConfig[] = RAW_THEMES.map((theme) => ({
  ...theme,
  words: normalizeWords(theme.words, theme.gridSize),
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
