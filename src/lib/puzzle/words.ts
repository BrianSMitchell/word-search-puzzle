import { getWordsByTags } from "./wordPool";

const WORD_CLEANUP = /[^a-zA-Z]/g;

export function sanitizeWord(raw: string): string {
  return raw.replace(WORD_CLEANUP, "").toUpperCase();
}

export function normalizeWords(words: string[], gridSize: number): string[] {
  const cleaned = words
    .map((word) => sanitizeWord(word))
    .filter((word) => word.length >= 2 && word.length <= gridSize);
  return Array.from(new Set(cleaned));
}

export const HOMEPAGE_WORDS = getWordsByTags(["homepage"]);

export const DAILY_WORD_SETS = [
  ["FOREST", "STREAM", "TRAIL", "LEAF", "BIRD", "BRANCH", "MOSS", "ROOTS"],
  ["OCEAN", "CORAL", "WAVES", "TIDE", "SHELL", "FISH", "REEF", "SAND"],
  ["MARKET", "BREAD", "FRUIT", "SPICE", "GRAIN", "HONEY", "OLIVE", "CHEESE"],
  ["COSMOS", "ORBIT", "COMET", "PLANET", "STARS", "LUNAR", "SOLAR", "AURORA"],
  ["STUDIO", "CANVAS", "PAINT", "BRUSH", "COLOR", "FRAME", "SKETCH", "MURAL"],
  ["HARBOR", "SAILS", "LIGHT", "PORT", "DOCK", "WIND", "ANCHOR", "CREW"],
  ["CAMPUS", "LECTURE", "STUDY", "BOOK", "NOTES", "CLASS", "QUIZ", "LAB"],
];

export const PRINTABLE_WORDS = getWordsByTags(["printable"]);
