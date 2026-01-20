"use client";

import type { Cell, Puzzle } from "@/lib/puzzle/types";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import styles from "./PuzzleBoard.module.css";

type PuzzleBoardProps = {
  puzzle: Puzzle;
  title?: string;
  onNewPuzzle?: () => void;
  newPuzzleLabel?: string;
  onWordFound?: (word: string) => void;
  onComplete?: () => void;
  sidecarFooter?: React.ReactNode;
};

type Direction = {
  dr: number;
  dc: number;
};

function cellKey(cell: Cell) {
  return `${cell.row}-${cell.col}`;
}

function getDirection(start: Cell, end: Cell, allowDiagonal: boolean): Direction | null {
  const dr = end.row - start.row;
  const dc = end.col - start.col;
  if (dr === 0 && dc === 0) {
    return { dr: 0, dc: 0 };
  }
  if (dr === 0) {
    return { dr: 0, dc: Math.sign(dc) };
  }
  if (dc === 0) {
    return { dr: Math.sign(dr), dc: 0 };
  }
  if (allowDiagonal && Math.abs(dr) === Math.abs(dc)) {
    return { dr: Math.sign(dr), dc: Math.sign(dc) };
  }
  return null;
}

function buildPath(start: Cell, end: Cell, direction: Direction): Cell[] {
  const cells: Cell[] = [];
  const length = Math.max(Math.abs(end.row - start.row), Math.abs(end.col - start.col)) + 1;
  for (let i = 0; i < length; i += 1) {
    cells.push({
      row: start.row + direction.dr * i,
      col: start.col + direction.dc * i,
    });
  }
  return cells;
}

export function PuzzleBoard({
  puzzle,
  title,
  onNewPuzzle,
  newPuzzleLabel,
  onWordFound,
  onComplete,
  sidecarFooter,
}: PuzzleBoardProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState<Cell | null>(null);
  const [end, setEnd] = useState<Cell | null>(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [foundWords, setFoundWords] = useState<Set<string>>(new Set());
  const [foundCells, setFoundCells] = useState<Set<string>>(new Set());
  const [activeCell, setActiveCell] = useState<Cell>({ row: 0, col: 0 });
  const [statusMessage, setStatusMessage] = useState("Find all words in the list.");

  const wordSet = useMemo(() => new Set(puzzle.words), [puzzle.words]);

  const selection = useMemo(() => {
    if (!start || !end) {
      return [];
    }
    const direction = getDirection(start, end, puzzle.allowDiagonal);
    if (!direction) {
      return [start];
    }
    return buildPath(start, end, direction);
  }, [start, end, puzzle.allowDiagonal]);

  const selectionSet = useMemo(() => {
    return new Set(selection.map(cellKey));
  }, [selection]);

  const isComplete = foundWords.size === puzzle.words.length && puzzle.words.length > 0;

  const hasNotifiedComplete = useRef(false);

  useEffect(() => {
    if (isComplete && !hasNotifiedComplete.current) {
      hasNotifiedComplete.current = true;
      onComplete?.();
    }
  }, [isComplete, onComplete]);

  const focusCell = (cell: Cell) => {
    const target = gridRef.current?.querySelector<HTMLButtonElement>(
      `[data-cell="${cellKey(cell)}"]`,
    );
    target?.focus();
  };

  const resetSelection = () => {
    setStart(null);
    setEnd(null);
    setIsSelecting(false);
  };

  const handleMatch = (word: string, path: Cell[]) => {
    if (foundWords.has(word)) {
      resetSelection();
      return;
    }
    const nextWords = new Set(foundWords);
    nextWords.add(word);
    const nextCells = new Set(foundCells);
    path.forEach((cell) => nextCells.add(cellKey(cell)));
    setFoundWords(nextWords);
    setFoundCells(nextCells);
    setStatusMessage(`${word} found.`);
    onWordFound?.(word);
    resetSelection();
  };

  const finalizeSelection = () => {
    if (!start || !end) {
      return;
    }
    const direction = getDirection(start, end, puzzle.allowDiagonal);
    if (!direction) {
      resetSelection();
      return;
    }
    const path = buildPath(start, end, direction);
    const letters = path.map((cell) => puzzle.grid[cell.row][cell.col]).join("");
    if (wordSet.has(letters)) {
      handleMatch(letters, path);
      return;
    }
    const reversed = letters.split("").reverse().join("");
    if (puzzle.allowBackwards && wordSet.has(reversed)) {
      handleMatch(reversed, path);
      return;
    }
    setStatusMessage("No match. Try a new word.");
    resetSelection();
  };

  const handlePointerDown = (cell: Cell) => {
    setStart(cell);
    setEnd(cell);
    setIsSelecting(true);
    setActiveCell(cell);
  };

  const handlePointerEnter = (cell: Cell) => {
    if (!isSelecting) {
      return;
    }
    setEnd(cell);
  };

  const handlePointerUp = () => {
    if (!isSelecting) {
      return;
    }
    finalizeSelection();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, cell: Cell) => {
    const key = event.key;
    if (key === "Enter" || key === " ") {
      event.preventDefault();
      if (!isSelecting) {
        setStart(cell);
        setEnd(cell);
        setIsSelecting(true);
      } else {
        finalizeSelection();
      }
      return;
    }
    if (key === "Escape") {
      event.preventDefault();
      resetSelection();
      return;
    }
    const moves: Record<string, Cell> = {
      ArrowUp: { row: Math.max(cell.row - 1, 0), col: cell.col },
      ArrowDown: { row: Math.min(cell.row + 1, puzzle.size - 1), col: cell.col },
      ArrowLeft: { row: cell.row, col: Math.max(cell.col - 1, 0) },
      ArrowRight: { row: cell.row, col: Math.min(cell.col + 1, puzzle.size - 1) },
    };
    if (moves[key]) {
      event.preventDefault();
      const next = moves[key];
      setActiveCell(next);
      focusCell(next);
      if (isSelecting) {
        setEnd(next);
      }
    }
  };

  const handleReset = () => {
    setFoundWords(new Set());
    setFoundCells(new Set());
    setStatusMessage("Puzzle reset. Start again.");
    resetSelection();
    hasNotifiedComplete.current = false;
  };

  return (
    <section className={styles.board} onPointerUp={handlePointerUp}>
      <div className={styles.header}>
        {title ? <h2 className={styles.title}>{title}</h2> : null}
        <div className={styles.status} role="status" aria-live="polite">
          {isComplete ? "Puzzle complete. Great work." : statusMessage}
        </div>
      </div>
      <div className={styles.content}>
        <div
          className={styles.grid}
          ref={gridRef}
          role="grid"
          aria-label="Word search puzzle grid"
          style={{ gridTemplateColumns: `repeat(${puzzle.size}, minmax(0, 1fr))` }}
        >
          {puzzle.grid.map((row, rowIndex) =>
            row.map((letter, colIndex) => {
              const cell = { row: rowIndex, col: colIndex };
              const key = cellKey(cell);
              const isFound = foundCells.has(key);
              const isSelected = selectionSet.has(key);
              const isActive = activeCell.row === rowIndex && activeCell.col === colIndex;
              return (
                <button
                  key={key}
                  type="button"
                  className={`${styles.cell} ${isFound ? styles.found : ""} ${
                    isSelected ? styles.selected : ""
                  }`}
                  data-cell={key}
                  onPointerDown={() => handlePointerDown(cell)}
                  onPointerEnter={() => handlePointerEnter(cell)}
                  onFocus={() => setActiveCell(cell)}
                  onKeyDown={(event) => handleKeyDown(event, cell)}
                  tabIndex={isActive ? 0 : -1}
                  aria-label={`Row ${rowIndex + 1}, Column ${colIndex + 1}, letter ${letter}`}
                >
                  {letter}
                </button>
              );
            }),
          )}
        </div>
        <aside className={styles.sidebar}>
          <div className={styles.wordList}>
            <h3 className={styles.wordTitle}>Find these words</h3>
            <ul>
              {puzzle.words.map((word) => (
                <li key={word} className={foundWords.has(word) ? styles.wordFound : ""}>
                  {word}
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.controls} no-print`}>
            <button className={styles.resetButton} type="button" onClick={handleReset}>
              Reset puzzle
            </button>
            {onNewPuzzle ? (
              <button
                className="button button-solid"
                type="button"
                onClick={() => {
                  handleReset();
                  onNewPuzzle();
                }}
              >
                {newPuzzleLabel ?? "New puzzle"}
              </button>
            ) : null}
            {sidecarFooter && <div className={styles.sidecarFooter}>{sidecarFooter}</div>}
          </div>
        </aside>
      </div>
    </section>
  );
}
