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
    slug: "sports",
    name: "Sports",
    title: "Sports Word Search",
    description:
      "Play a sports word search puzzle with popular games, gear, and action words. Free online and printable.",
    words: [
      "soccer",
      "basketball",
      "baseball",
      "football",
      "tennis",
      "golf",
      "hockey",
      "swimming",
      "runner",
      "stadium",
      "coach",
      "trophy",
    ],
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
    words: [
      "pasta",
      "pizza",
      "salad",
      "bread",
      "cheese",
      "soup",
      "spice",
      "noodle",
      "tomato",
      "baker",
      "recipe",
      "kitchen",
    ],
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
    words: [
      "atom",
      "energy",
      "gravity",
      "planet",
      "galaxy",
      "research",
      "lab",
      "measure",
      "sample",
      "nature",
      "matter",
      "theory",
    ],
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
    words: [
      "continent",
      "ocean",
      "river",
      "mountain",
      "valley",
      "island",
      "desert",
      "border",
      "capital",
      "globe",
      "map",
      "travel",
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
