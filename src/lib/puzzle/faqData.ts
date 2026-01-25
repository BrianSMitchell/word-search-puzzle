/**
 * FAQ data for themed word search pages
 * Each theme gets common FAQs plus theme-specific ones
 */

import type { FAQItem } from "@/components/Schema";

// Common FAQs that apply to all puzzle pages
const commonFAQs: FAQItem[] = [
  {
    question: "How do I play a word search puzzle?",
    answer:
      "Click or tap on the first letter of a word, then drag to the last letter to select it. Words can be hidden horizontally, vertically, or diagonally, and may run forwards or backwards depending on the puzzle difficulty. Found words will be highlighted and crossed off the list.",
  },
  {
    question: "Are these word search puzzles free?",
    answer:
      "Yes, all word search puzzles on this site are completely free to play online. No sign-up, no download, and no payment required. You can also print puzzles for free.",
  },
  {
    question: "Can I print these word search puzzles?",
    answer:
      "Yes! Click the print button or use your browser's print function (Ctrl+P or Cmd+P) to get a clean, printer-friendly version of any puzzle. The printable version removes navigation and ads for a clean worksheet.",
  },
  {
    question: "How do I get a new puzzle?",
    answer:
      "Click the 'New puzzle' button below the grid to generate a fresh puzzle with the same theme and word list. Each new puzzle has a different layout, so you can play the same theme multiple times without repeating.",
  },
];

// Theme-specific FAQs
const themeFAQs: Record<string, FAQItem[]> = {
  animals: [
    {
      question: "What types of animals are in these word searches?",
      answer:
        "Our animal word searches include a mix of pets (dogs, cats, hamsters), zoo animals (lions, elephants, giraffes), farm animals (cows, pigs, chickens), and wildlife (wolves, bears, eagles). The word list rotates so you'll discover different animals each time.",
    },
  ],
  kids: [
    {
      question: "What age are these word searches designed for?",
      answer:
        "Our kids word searches are designed for children ages 5-10, with simple vocabulary, larger letters, and no diagonal or backwards words. They're perfect for early readers developing word recognition skills.",
    },
    {
      question: "Are these word searches safe for children?",
      answer:
        "Yes, all vocabulary is age-appropriate and family-friendly. The puzzles use common words that children encounter in everyday reading and school activities.",
    },
  ],
  holidays: [
    {
      question: "Which holidays are covered in these puzzles?",
      answer:
        "Our holiday word searches cover major celebrations including Christmas, Halloween, Thanksgiving, Easter, Valentine's Day, and more. We also have dedicated pages for each specific holiday if you want a themed experience.",
    },
  ],
  easy: [
    {
      question: "What makes these puzzles 'easy'?",
      answer:
        "Easy word searches have smaller grids (10x10), shorter words (3-6 letters), and only horizontal and vertical directions — no diagonals or backwards words. This makes them perfect for beginners, children, or anyone who wants a relaxing puzzle experience.",
    },
  ],
  "large-print": [
    {
      question: "How large is the print in these puzzles?",
      answer:
        "Our large print word searches use a 12x12 grid with increased letter spacing and larger fonts. The design prioritizes readability for seniors, those with vision impairments, or anyone who prefers easier-to-read puzzles.",
    },
  ],
  kindergarten: [
    {
      question: "Are these puzzles suitable for pre-readers?",
      answer:
        "Yes! Kindergarten word searches use simple 3-5 letter words with large letters and no tricky directions. They help young learners practice letter recognition and early reading skills in a fun way.",
    },
  ],
  "first-grade": [
    {
      question: "Do these puzzles align with school curriculum?",
      answer:
        "Our first grade word searches focus on common sight words and vocabulary that align with typical first grade reading lists. They make great supplements for classroom learning or homework practice.",
    },
  ],
  spelling: [
    {
      question: "Will these puzzles help with spelling tests?",
      answer:
        "Yes! Spelling word searches reinforce correct letter patterns by having students visually identify and trace through words. This helps build muscle memory for commonly misspelled words.",
    },
  ],
  christmas: [
    {
      question: "What Christmas vocabulary is included?",
      answer:
        "Our Christmas word searches include words about decorations (tree, ornament, lights), traditions (caroling, gifts, stockings), winter (snow, sleigh, reindeer), and holiday cheer (joy, merry, festive).",
    },
  ],
  halloween: [
    {
      question: "Are these Halloween puzzles scary?",
      answer:
        "Our Halloween word searches are spooky-fun, not scary. They include friendly vocabulary like pumpkin, costume, candy, ghost, and witch — perfect for classroom Halloween parties and family activities.",
    },
  ],
  thanksgiving: [
    {
      question: "What Thanksgiving words are featured?",
      answer:
        "Thanksgiving word searches include vocabulary about food (turkey, stuffing, pie), gratitude (thankful, blessings, family), autumn (harvest, leaves, corn), and celebration (feast, gather, tradition).",
    },
  ],
  seniors: [
    {
      question: "Are these puzzles good for cognitive health?",
      answer:
        "Word search puzzles are recommended for seniors as gentle cognitive exercise. They help maintain mental sharpness, improve focus, and provide a calming activity. Our senior puzzles use easy-to-read text and familiar vocabulary.",
    },
  ],
  hard: [
    {
      question: "How difficult are the hard word searches?",
      answer:
        "Hard word searches feature 18x18 grids with longer words (8-12 letters), all directions enabled (horizontal, vertical, diagonal), and backwards words. They're designed for experienced puzzle solvers who want a real challenge.",
    },
  ],
  "brain-games": [
    {
      question: "Do word searches really exercise the brain?",
      answer:
        "Yes! Word searches engage pattern recognition, visual scanning, vocabulary recall, and focus. Studies suggest regular puzzle-solving may help maintain cognitive function and provide mental stimulation similar to other brain training activities.",
    },
  ],
  relaxing: [
    {
      question: "How are these puzzles relaxing?",
      answer:
        "Relaxing word searches use calming vocabulary (peaceful, serene, gentle), smaller grids, and simple directions. The meditative act of searching for words can reduce stress and provide a mindful break from daily activities.",
    },
  ],
  food: [
    {
      question: "What food categories are covered?",
      answer:
        "Our food word searches include vocabulary from cooking (bake, sauté, simmer), ingredients (flour, eggs, butter), cuisines (Italian, Mexican, Asian), and meal types (breakfast, dinner, dessert).",
    },
  ],
  sports: [
    {
      question: "Which sports are included?",
      answer:
        "Our sports word searches cover major athletics including football, basketball, soccer, baseball, tennis, and more. Vocabulary includes equipment, positions, actions, and sports terminology.",
    },
  ],
  nature: [
    {
      question: "What nature topics are covered?",
      answer:
        "Nature word searches include vocabulary about ecosystems (forest, ocean, desert), weather (rain, sunshine, storm), plants (trees, flowers, grass), and environmental features (mountains, rivers, valleys).",
    },
  ],
  vocabulary: [
    {
      question: "Are these good for SAT prep?",
      answer:
        "Yes! Our vocabulary word searches include SAT-level words and academic vocabulary. They provide a fun way to familiarize yourself with advanced terms while practicing word recognition.",
    },
  ],
};

export function getFAQsForTheme(slug: string): FAQItem[] {
  const specific = themeFAQs[slug] || [];
  return [...specific, ...commonFAQs];
}

export function getCommonFAQs(): FAQItem[] {
  return commonFAQs;
}
