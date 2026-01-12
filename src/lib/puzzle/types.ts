export type Cell = {
  row: number;
  col: number;
};

export type Direction = {
  dr: number;
  dc: number;
};

export type Placement = {
  word: string;
  start: Cell;
  end: Cell;
  direction: Direction;
};

export type PuzzleConfig = {
  seed: number;
  gridSize: number;
  words: string[];
  allowDiagonal: boolean;
  allowBackwards: boolean;
};

export type Puzzle = {
  seed: number;
  size: number;
  grid: string[][];
  words: string[];
  placements: Placement[];
  allowDiagonal: boolean;
  allowBackwards: boolean;
};
