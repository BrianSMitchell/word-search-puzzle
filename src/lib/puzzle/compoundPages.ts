/**
 * Compound modifier pages - combinations of theme + difficulty/audience
 * These target long-tail keywords with lower competition
 */

import { getThemedPageBySlug, type ThemedPageConfig } from "./themedPages";

export type CompoundPageConfig = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  baseTheme: string;
  // Overrides for the base theme
  gridSize?: number;
  allowDiagonal?: boolean;
  allowBackwards?: boolean;
  // SEO-focused intro
  intro: string[];
  // Audience target
  audienceLabel?: string;
};

// High-value compound pages targeting specific long-tail keywords
export const COMPOUND_PAGES: CompoundPageConfig[] = [
  // Easy + Theme combinations
  {
    slug: "easy-christmas-word-search",
    title: "Easy Christmas Word Search Puzzles",
    description:
      "Easy Christmas word search puzzles with simple vocabulary and no diagonal or backwards words. Perfect for young children and holiday classroom activities.",
    h1: "Easy Christmas Word Search Puzzles",
    baseTheme: "christmas",
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
    intro: [
      "Easy Christmas word searches make holiday puzzle time accessible to everyone, with straightforward directions and festive vocabulary.",
      "These simplified grids are perfect for young children, ESL learners, or anyone who wants a relaxing holiday puzzle.",
    ],
    audienceLabel: "Children and Beginners",
  },
  {
    slug: "easy-halloween-word-search",
    title: "Easy Halloween Word Search Puzzles",
    description:
      "Easy Halloween word search puzzles with spooky-fun vocabulary and beginner-friendly gameplay. Great for classroom parties and young trick-or-treaters.",
    h1: "Easy Halloween Word Search Puzzles",
    baseTheme: "halloween",
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
    intro: [
      "Easy Halloween word searches bring spooky fun without the frustration, using simple directions and kid-friendly vocabulary.",
      "Perfect for October classroom parties, trick-or-treat breaks, or any young ghoul who loves puzzles.",
    ],
    audienceLabel: "Children",
  },
  {
    slug: "easy-thanksgiving-word-search",
    title: "Easy Thanksgiving Word Search Puzzles",
    description:
      "Easy Thanksgiving word search puzzles celebrating gratitude with simple gameplay. Ideal for kids tables and family gatherings.",
    h1: "Easy Thanksgiving Word Search Puzzles",
    baseTheme: "thanksgiving",
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
    intro: [
      "Easy Thanksgiving word searches keep the kids entertained while the turkey cooks, with simple vocabulary about gratitude and harvest.",
      "Print these for the kids' table or play together as a family activity before the big meal.",
    ],
    audienceLabel: "Children and Families",
  },

  // Kids + Theme combinations
  {
    slug: "animal-word-search-for-kids",
    title: "Animal Word Search Puzzles for Kids",
    description:
      "Animal word search puzzles designed for kids with friendly pets, zoo animals, and wildlife vocabulary in an easy-to-play format.",
    h1: "Animal Word Search Puzzles for Kids",
    baseTheme: "animals",
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
    intro: [
      "Animal word searches for kids feature favorite creatures in a format designed for young readers and puzzle beginners.",
      "From puppies to penguins, these puzzles help children learn animal names while developing word recognition skills.",
    ],
    audienceLabel: "Children (Ages 5-10)",
  },
  {
    slug: "christmas-word-search-for-kids",
    title: "Christmas Word Search Puzzles for Kids",
    description:
      "Christmas word search puzzles for kids with festive holiday vocabulary and easy gameplay. Perfect for December classroom activities.",
    h1: "Christmas Word Search Puzzles for Kids",
    baseTheme: "christmas",
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
    intro: [
      "Christmas word searches for kids bring holiday magic to puzzle time with Santa, reindeer, and festive vocabulary kids love.",
      "These easy grids are perfect for classroom parties, holiday homework, or keeping kids busy while wrapping presents.",
    ],
    audienceLabel: "Children",
  },
  {
    slug: "food-word-search-for-kids",
    title: "Food Word Search Puzzles for Kids",
    description:
      "Food word search puzzles for kids featuring fruits, vegetables, and favorite foods. A fun way to learn food vocabulary.",
    h1: "Food Word Search Puzzles for Kids",
    baseTheme: "food",
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
    intro: [
      "Food word searches for kids turn vocabulary building into a tasty adventure with fruits, veggies, and kid-favorite foods.",
      "Great for nutrition lessons, cooking class, or any activity that combines learning with fun.",
    ],
    audienceLabel: "Children",
  },

  // Large Print + Theme combinations
  {
    slug: "large-print-christmas-word-search",
    title: "Large Print Christmas Word Search Puzzles",
    description:
      "Large print Christmas word search puzzles with easy-to-read letters and holiday vocabulary. Perfect for seniors and vision-impaired players.",
    h1: "Large Print Christmas Word Search Puzzles",
    baseTheme: "christmas",
    gridSize: 12,
    allowDiagonal: false,
    allowBackwards: false,
    intro: [
      "Large print Christmas word searches combine festive vocabulary with easy-to-read letters for comfortable holiday puzzling.",
      "Ideal for senior centers, nursing home activities, or anyone who prefers generous letter spacing.",
    ],
    audienceLabel: "Seniors and Vision-Impaired",
  },
  {
    slug: "large-print-thanksgiving-word-search",
    title: "Large Print Thanksgiving Word Search Puzzles",
    description:
      "Large print Thanksgiving word search puzzles with readable text and harvest vocabulary. Great for senior activities and family gatherings.",
    h1: "Large Print Thanksgiving Word Search Puzzles",
    baseTheme: "thanksgiving",
    gridSize: 12,
    allowDiagonal: false,
    allowBackwards: false,
    intro: [
      "Large print Thanksgiving word searches make holiday puzzle time accessible with spacious grids and clear, readable letters.",
      "Perfect for multi-generational family gatherings where everyone can participate comfortably.",
    ],
    audienceLabel: "Seniors",
  },
  {
    slug: "large-print-animal-word-search",
    title: "Large Print Animal Word Search Puzzles",
    description:
      "Large print animal word search puzzles with easy-to-read letters featuring pets, wildlife, and zoo animals.",
    h1: "Large Print Animal Word Search Puzzles",
    baseTheme: "animals",
    gridSize: 12,
    allowDiagonal: false,
    allowBackwards: false,
    intro: [
      "Large print animal word searches feature beloved creatures in an accessible format with generous spacing and clear letters.",
      "A relaxing puzzle experience for seniors, vision-impaired players, or anyone who enjoys comfortable reading.",
    ],
    audienceLabel: "Seniors",
  },

  // Printable + Theme combinations
  {
    slug: "printable-christmas-word-search",
    title: "Printable Christmas Word Search Puzzles",
    description:
      "Free printable Christmas word search puzzles ready for classrooms, parties, and holiday activities. Download and print instantly.",
    h1: "Printable Christmas Word Search Puzzles",
    baseTheme: "christmas",
    intro: [
      "Printable Christmas word searches are ready to download and print for classrooms, holiday parties, and family activities.",
      "Get clean, printer-friendly layouts that look great on paper without ads or distracting elements.",
    ],
  },
  {
    slug: "printable-halloween-word-search",
    title: "Printable Halloween Word Search Puzzles",
    description:
      "Free printable Halloween word search puzzles for classroom parties, trick-or-treat fun, and spooky activities. Print instantly.",
    h1: "Printable Halloween Word Search Puzzles",
    baseTheme: "halloween",
    intro: [
      "Printable Halloween word searches are perfect for October classroom parties, scout meetings, and trick-or-treat preparation.",
      "Print clean, black-and-white layouts that work great as worksheets or party activities.",
    ],
  },
  {
    slug: "printable-thanksgiving-word-search",
    title: "Printable Thanksgiving Word Search Puzzles",
    description:
      "Free printable Thanksgiving word search puzzles for holiday gatherings, classroom activities, and kids tables.",
    h1: "Printable Thanksgiving Word Search Puzzles",
    baseTheme: "thanksgiving",
    intro: [
      "Printable Thanksgiving word searches keep guests entertained with harvest vocabulary and gratitude themes.",
      "Print enough for the whole table and turn puzzle time into a group activity.",
    ],
  },
  {
    slug: "printable-animal-word-search",
    title: "Printable Animal Word Search Puzzles",
    description:
      "Free printable animal word search puzzles featuring pets, wildlife, and zoo animals. Perfect for classrooms and animal lovers.",
    h1: "Printable Animal Word Search Puzzles",
    baseTheme: "animals",
    intro: [
      "Printable animal word searches are ready for science class, zoo trips, or any activity where animals take center stage.",
      "Download clean worksheets that print beautifully for classroom or home use.",
    ],
  },

  // Hard + Theme combinations for challenge seekers
  {
    slug: "hard-christmas-word-search",
    title: "Hard Christmas Word Search Puzzles",
    description:
      "Challenging Christmas word search puzzles with large grids, long words, and all directions enabled. For experienced puzzle solvers.",
    h1: "Hard Christmas Word Search Puzzles",
    baseTheme: "christmas",
    gridSize: 18,
    allowDiagonal: true,
    allowBackwards: true,
    intro: [
      "Hard Christmas word searches challenge experienced puzzlers with larger grids and tricky word placements.",
      "Test your skills with festive vocabulary hidden in every direction, including backwards and diagonal.",
    ],
    audienceLabel: "Experienced Puzzlers",
  },
  {
    slug: "hard-animal-word-search",
    title: "Hard Animal Word Search Puzzles",
    description:
      "Challenging animal word search puzzles with complex grids and difficult word placements. For puzzle experts who want a real challenge.",
    h1: "Hard Animal Word Search Puzzles",
    baseTheme: "animals",
    gridSize: 18,
    allowDiagonal: true,
    allowBackwards: true,
    intro: [
      "Hard animal word searches hide wildlife vocabulary in challenging configurations with all directions enabled.",
      "Perfect for puzzle veterans who want to test their skills with a nature-themed challenge.",
    ],
    audienceLabel: "Experienced Puzzlers",
  },

  // Easter combinations
  {
    slug: "easy-easter-word-search",
    title: "Easy Easter Word Search Puzzles",
    description:
      "Easy Easter word search puzzles with spring vocabulary and simple gameplay. Perfect for young children and Easter celebrations.",
    h1: "Easy Easter Word Search Puzzles",
    baseTheme: "easter",
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
    intro: [
      "Easy Easter word searches bring springtime fun with bunnies, eggs, and simple vocabulary kids can find with confidence.",
      "Perfect for Easter baskets, Sunday school, or any spring celebration.",
    ],
    audienceLabel: "Children",
  },
  {
    slug: "easter-word-search-for-kids",
    title: "Easter Word Search Puzzles for Kids",
    description:
      "Easter word search puzzles for kids featuring bunnies, eggs, and spring vocabulary. Free online and printable for Easter activities.",
    h1: "Easter Word Search Puzzles for Kids",
    baseTheme: "easter",
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
    intro: [
      "Easter word searches for kids feature spring vocabulary that children love—bunnies, eggs, and blooming flowers.",
      "Great for Easter parties, classroom celebrations, or keeping kids busy during egg hunts.",
    ],
    audienceLabel: "Children (Ages 5-10)",
  },
  {
    slug: "printable-easter-word-search",
    title: "Printable Easter Word Search Puzzles",
    description:
      "Free printable Easter word search puzzles for spring celebrations, classroom activities, and Easter parties. Print instantly.",
    h1: "Printable Easter Word Search Puzzles",
    baseTheme: "easter",
    intro: [
      "Printable Easter word searches are ready for spring classroom activities, church events, and family egg hunts.",
      "Print clean, colorful worksheets that bring spring vocabulary to life on paper.",
    ],
  },

  // Valentine's Day combinations
  {
    slug: "easy-valentines-day-word-search",
    title: "Easy Valentine's Day Word Search Puzzles",
    description:
      "Easy Valentine's Day word search puzzles with love and friendship vocabulary. Simple gameplay for classroom exchanges and parties.",
    h1: "Easy Valentine's Day Word Search Puzzles",
    baseTheme: "valentines-day",
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
    intro: [
      "Easy Valentine's Day word searches spread love with simple vocabulary about hearts, friendship, and caring.",
      "Perfect for classroom Valentine exchanges or sweet puzzle time with someone special.",
    ],
    audienceLabel: "Children",
  },
  {
    slug: "valentines-word-search-for-kids",
    title: "Valentine's Day Word Search Puzzles for Kids",
    description:
      "Valentine's Day word search puzzles for kids with hearts, love, and friendship vocabulary. Free printable and online play.",
    h1: "Valentine's Day Word Search Puzzles for Kids",
    baseTheme: "valentines-day",
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
    intro: [
      "Valentine's word searches for kids celebrate friendship and caring with vocabulary that warms the heart.",
      "Great for February classroom activities, party favors, or quiet time with loved ones.",
    ],
    audienceLabel: "Children",
  },
  {
    slug: "printable-valentines-word-search",
    title: "Printable Valentine's Day Word Search Puzzles",
    description:
      "Free printable Valentine's Day word search puzzles for classroom exchanges, party activities, and February fun.",
    h1: "Printable Valentine's Day Word Search Puzzles",
    baseTheme: "valentines-day",
    intro: [
      "Printable Valentine's word searches make perfect classroom handouts, party activities, or heartfelt gifts.",
      "Download clean worksheets featuring love and friendship vocabulary that prints beautifully.",
    ],
  },

  // Sports for kids
  {
    slug: "sports-word-search-for-kids",
    title: "Sports Word Search Puzzles for Kids",
    description:
      "Sports word search puzzles for kids with athletics vocabulary and easy gameplay. Perfect for PE class and sports camps.",
    h1: "Sports Word Search Puzzles for Kids",
    baseTheme: "sports",
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
    intro: [
      "Sports word searches for kids feature favorite games and athletics vocabulary in an easy-to-play format.",
      "Great for PE class, sports camps, or young athletes who love game-day puzzles.",
    ],
    audienceLabel: "Children",
  },
  {
    slug: "easy-sports-word-search",
    title: "Easy Sports Word Search Puzzles",
    description:
      "Easy sports word search puzzles with athletics vocabulary and beginner-friendly gameplay. No diagonal or backwards words.",
    h1: "Easy Sports Word Search Puzzles",
    baseTheme: "sports",
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
    intro: [
      "Easy sports word searches bring the excitement of athletics to puzzle time with simple, straightforward gameplay.",
      "Perfect for young sports fans or anyone who wants a relaxing game-themed puzzle.",
    ],
    audienceLabel: "Children and Beginners",
  },

  // Nature for kids
  {
    slug: "nature-word-search-for-kids",
    title: "Nature Word Search Puzzles for Kids",
    description:
      "Nature word search puzzles for kids with outdoor and environment vocabulary. Perfect for science class and nature walks.",
    h1: "Nature Word Search Puzzles for Kids",
    baseTheme: "nature",
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
    intro: [
      "Nature word searches for kids explore the outdoors with vocabulary about trees, weather, and ecosystems.",
      "Perfect for science class, outdoor education, or young nature enthusiasts.",
    ],
    audienceLabel: "Children",
  },
  {
    slug: "printable-nature-word-search",
    title: "Printable Nature Word Search Puzzles",
    description:
      "Free printable nature word search puzzles with outdoor vocabulary. Perfect for science class and environmental education.",
    h1: "Printable Nature Word Search Puzzles",
    baseTheme: "nature",
    intro: [
      "Printable nature word searches are ready for science lessons, outdoor education, and environmental activities.",
      "Download clean worksheets featuring trees, weather, and ecosystems vocabulary.",
    ],
  },

  // Food combinations
  {
    slug: "printable-food-word-search",
    title: "Printable Food Word Search Puzzles",
    description:
      "Free printable food word search puzzles with cooking and cuisine vocabulary. Perfect for nutrition class and culinary arts.",
    h1: "Printable Food Word Search Puzzles",
    baseTheme: "food",
    intro: [
      "Printable food word searches serve up tasty vocabulary for nutrition lessons, cooking class, and food-themed activities.",
      "Download clean worksheets that print beautifully for classroom or home use.",
    ],
  },
];

export function getCompoundPageBySlug(slug: string): (CompoundPageConfig & { words: string[] }) | undefined {
  const compound = COMPOUND_PAGES.find((p) => p.slug === slug);
  if (!compound) return undefined;

  const baseTheme = getThemedPageBySlug(compound.baseTheme);
  if (!baseTheme) return undefined;

  return {
    ...compound,
    gridSize: compound.gridSize ?? baseTheme.gridSize,
    allowDiagonal: compound.allowDiagonal ?? baseTheme.allowDiagonal,
    allowBackwards: compound.allowBackwards ?? baseTheme.allowBackwards,
    words: baseTheme.words,
  };
}

export function getCompoundPageSlugs(): string[] {
  return COMPOUND_PAGES.map((p) => p.slug);
}
