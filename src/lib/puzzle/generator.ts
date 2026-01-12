import { createRng, pick, shuffle } from "./rng";
import type { Direction, Placement, Puzzle, PuzzleConfig } from "./types";

const BASE_DIRECTIONS: Direction[] = [
  { dr: 0, dc: 1 },
  { dr: 1, dc: 0 },
];

const DIAGONAL_DIRECTIONS: Direction[] = [
  { dr: 1, dc: 1 },
  { dr: -1, dc: 1 },
];

function buildDirections(allowDiagonal: boolean, allowBackwards: boolean) {
  const directions = [...BASE_DIRECTIONS];
  if (allowDiagonal) {
    directions.push(...DIAGONAL_DIRECTIONS);
  }
  if (allowBackwards) {
    const reverse = directions.map((dir) => ({ dr: -dir.dr, dc: -dir.dc }));
    directions.push(...reverse);
  }
  return directions;
}

function createEmptyGrid(size: number): string[][] {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => ""));
}

function canPlaceWord(
  grid: string[][],
  word: string,
  startRow: number,
  startCol: number,
  direction: Direction,
) {
  for (let i = 0; i < word.length; i += 1) {
    const row = startRow + direction.dr * i;
    const col = startCol + direction.dc * i;
    if (row < 0 || col < 0 || row >= grid.length || col >= grid.length) {
      return false;
    }
    const existing = grid[row][col];
    if (existing && existing !== word[i]) {
      return false;
    }
  }
  return true;
}

function placeWord(
  grid: string[][],
  word: string,
  startRow: number,
  startCol: number,
  direction: Direction,
) {
  for (let i = 0; i < word.length; i += 1) {
    const row = startRow + direction.dr * i;
    const col = startCol + direction.dc * i;
    grid[row][col] = word[i];
  }
}

function createPlacement(
  word: string,
  startRow: number,
  startCol: number,
  direction: Direction,
): Placement {
  return {
    word,
    start: { row: startRow, col: startCol },
    end: {
      row: startRow + direction.dr * (word.length - 1),
      col: startCol + direction.dc * (word.length - 1),
    },
    direction,
  };
}

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function fillEmptyCells(grid: string[][], rng: () => number) {
  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid.length; col += 1) {
      if (!grid[row][col]) {
        grid[row][col] = pick(LETTERS, rng);
      }
    }
  }
}

function attemptPuzzle(config: PuzzleConfig, rng: () => number): Puzzle | null {
  const grid = createEmptyGrid(config.gridSize);
  const placements: Placement[] = [];
  const directions = buildDirections(config.allowDiagonal, config.allowBackwards);
  const words = shuffle(config.words, rng).sort((a, b) => b.length - a.length);

  for (const word of words) {
    let placed = false;
    const attempts = config.gridSize * config.gridSize * 4;

    for (let i = 0; i < attempts; i += 1) {
      const direction = pick(directions, rng);
      const startRow = Math.floor(rng() * config.gridSize);
      const startCol = Math.floor(rng() * config.gridSize);
      if (canPlaceWord(grid, word, startRow, startCol, direction)) {
        placeWord(grid, word, startRow, startCol, direction);
        placements.push(createPlacement(word, startRow, startCol, direction));
        placed = true;
        break;
      }
    }

    if (!placed) {
      return null;
    }
  }

  fillEmptyCells(grid, rng);

  return {
    seed: config.seed,
    size: config.gridSize,
    grid,
    words: words,
    placements,
    allowDiagonal: config.allowDiagonal,
    allowBackwards: config.allowBackwards,
  };
}

export function generatePuzzle(config: PuzzleConfig): Puzzle {
  const rng = createRng(config.seed);
  const maxAttempts = 12;

  const displayWords = [...config.words].sort();

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const puzzle = attemptPuzzle(config, createRng(Math.floor(rng() * 1_000_000_000)));
    if (puzzle) {
      return { ...puzzle, words: displayWords };
    }
  }

  const fallbackRng = createRng(config.seed + 1);
  const fallbackGrid = createEmptyGrid(config.gridSize);
  fillEmptyCells(fallbackGrid, fallbackRng);

  return attemptPuzzle(config, createRng(config.seed + 1)) ?? {
    seed: config.seed,
    size: config.gridSize,
    grid: fallbackGrid,
    words: displayWords,
    placements: [],
    allowDiagonal: config.allowDiagonal,
    allowBackwards: config.allowBackwards,
  };
}
