import { seedFromString } from "./rng";
import { normalizeWords } from "./words";

export type ThemedPageConfig = {
  slug: string;
  name: string;
  title: string;
  description: string;
  gridSize: number;
  allowDiagonal: boolean;
  allowBackwards: boolean;
  words: string[];
  intro: string[];
  whoThisFor: string[];
  siblingSlugs: string[];
};

type ThemedPageRaw = Omit<ThemedPageConfig, "words"> & {
  words: string[];
};

const RAW_THEMED_PAGES: ThemedPageRaw[] = [
  {
    slug: "animals",
    name: "Animals",
    title: "Animal Word Search Puzzles",
    description:
      "Play animal word search puzzles free online. The grids mix pets, zoo animals, and wildlife vocabulary for fast play or printable worksheets.",
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
    words: [
      "lion",
      "tiger",
      "elephant",
      "giraffe",
      "zebra",
      "otter",
      "panda",
      "koala",
      "dolphin",
      "penguin",
      "rabbit",
      "whale",
      "hawk",
    ],
    intro: [
      "Play animal word search puzzles with friendly pets and curious wildlife right in your browser.",
      "Generate a new grid instantly or print a worksheet for classrooms, clubs, or animal lovers looking for a quick, themed challenge.",
    ],
    whoThisFor: [
      "Parents planning pet or wildlife activities",
      "Classroom centers covering animals and habitats",
      "Zoo volunteers and after-school clubs",
    ],
    siblingSlugs: ["kids", "holidays", "easy"],
  },
  {
    slug: "kids",
    name: "Kids",
    title: "Kids Word Search Puzzles",
    description:
      "Easy-to-read kids word searches with bright words, short grids, and beginner-friendly directions. Play online or print for storytime and classrooms.",
    gridSize: 12,
    allowDiagonal: false,
    allowBackwards: false,
    words: [
      "ball",
      "story",
      "smile",
      "learn",
      "friend",
      "crayon",
      "play",
      "music",
      "giggle",
      "jump",
      "share",
      "color",
      "teddy",
      "lunch",
    ],
    intro: [
      "Kids word search puzzles keep the letters large and the vocabulary simple so children stay engaged from start to finish.",
      "Instantly refresh the grid, print a worksheet, or send the link to classmates for a quick, joyful activity.",
    ],
    whoThisFor: [
      "Elementary teachers prepping literacy or center rotations",
      "Parents who need a calm, screen-based activity",
      "Daycare staff and homeschool families looking for structured play",
    ],
    siblingSlugs: ["animals", "easy", "large-print"],
  },
  {
    slug: "holidays",
    name: "Holidays",
    title: "Holiday Word Search Puzzles",
    description:
      "Celebrate the season with holiday word search puzzles that highlight traditions, parties, and seasonal words. Suitable for classrooms, parties, and family time.",
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
    words: [
      "holiday",
      "celebrate",
      "family",
      "lights",
      "cheer",
      "gift",
      "snowman",
      "reindeer",
      "tradition",
      "parade",
      "ornament",
      "travel",
      "candy",
      "joy",
    ],
    intro: [
      "Holiday word search puzzles keep seasonal words front and center so every game feels timely and festive.",
      "Use the generator to refresh the board, print a worksheet for the next party, or share the page as a cheerful activity for friends and students.",
    ],
    whoThisFor: [
      "Party hosts crafting low-prep games",
      "Teachers planning seasonal lessons",
      "Families who want themed puzzles for the holidays",
    ],
    siblingSlugs: ["animals", "kids", "large-print"],
  },
  {
    slug: "easy",
    name: "Easy",
    title: "Easy Word Search Puzzles",
    description:
      "Easy word search puzzles with a smaller grid, straight lines, and shorter words for beginners or anyone who wants a relaxing round.",
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
    words: [
      "puzzle",
      "calm",
      "focus",
      "letters",
      "grid",
      "word",
      "play",
      "happy",
      "relax",
      "rest",
      "smile",
      "learn",
    ],
    intro: [
      "Easy word searches are slow-paced puzzles with generous spacing and simple words.",
      "Perfect for seniors, new players, or anyone who prefers a low-pressure session before jumping into more challenging themes.",
    ],
    whoThisFor: [
      "Seniors and retirement communities",
      "New or returning players who want a gentle entry point",
      "ESL learners and reading groups that need short vocab",
    ],
    siblingSlugs: ["kids", "large-print"],
  },
  {
    slug: "large-print",
    name: "Large Print",
    title: "Large Print Word Search Puzzles",
    description:
      "Large print word searches with spacious grids and bold letters for better readability. Print, share, or play online with high-contrast text.",
    gridSize: 12,
    allowDiagonal: false,
    allowBackwards: false,
    words: [
      "large",
      "print",
      "letters",
      "bold",
      "clear",
      "easy",
      "calm",
      "comfort",
      "slow",
      "steady",
      "focus",
      "bright",
    ],
    intro: [
      "Large print word search puzzles boost readability with generous spacing and crisp letters.",
      "They are ideal for care centers, therapy groups, or any player who wants a roomy grid that feels comfortable on the eyes.",
    ],
    whoThisFor: [
      "Vision-impaired players and seniors",
      "Caregivers and activity directors at senior centers",
      "Clubs that want accessible group puzzles",
    ],
    siblingSlugs: ["easy", "kids", "holidays"],
  },
];

export const THEMED_PAGES = RAW_THEMED_PAGES.map((page) => ({
  ...page,
  words: normalizeWords(page.words, page.gridSize),
}));

export function getThemedPageBySlug(slug: string) {
  return THEMED_PAGES.find((page) => page.slug === slug);
}

export function getThemedPageSeed(slug: string) {
  return seedFromString(`themed-page-${slug}`);
}

export function getThemedPageSlugs() {
  return THEMED_PAGES.map((page) => page.slug);
}
