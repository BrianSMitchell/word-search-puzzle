"use client";

import { generatePuzzle } from "@/lib/puzzle/generator";
import { seedFromString } from "@/lib/puzzle/rng";
import { THEMES } from "@/lib/puzzle/themes";
import { normalizeWords } from "@/lib/puzzle/words";
import { useMemo, useState } from "react";
import { PuzzleBoard } from "./PuzzleBoard";

const DEFAULT_WORDS = `ocean
shell
wave
reef
tide
coral
surf
anchor`;

const GRID_OPTIONS = [10, 12, 14, 16, 18];

type WordSearchGeneratorProps = {
  initialWords?: string;
  initialThemeName?: string;
};

export function WordSearchGenerator({
  initialWords,
  initialThemeName,
}: WordSearchGeneratorProps) {
  const startingWords = initialWords?.trim() ? initialWords.trim() : DEFAULT_WORDS;
  const [rawWords, setRawWords] = useState(startingWords);
  const [gridSize, setGridSize] = useState(12);
  const [autoCount, setAutoCount] = useState(10);
  const [allowDiagonal, setAllowDiagonal] = useState(true);
  const [allowBackwards, setAllowBackwards] = useState(true);
  const [generation, setGeneration] = useState(0);

  const normalizedWords = useMemo(() => {
    const list = rawWords.split(/[\n,]+/).map((word) => word.trim());
    return normalizeWords(list, gridSize);
  }, [rawWords, gridSize]);

  const handleAutoFill = () => {
    // Collect all words from all themes
    const pool = THEMES.flatMap(t => t.words);
    // Shuffle
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    // Take autoCount words
    const selected = shuffled.slice(0, Math.min(autoCount, 30));
    setRawWords(selected.join("\n"));
    setGeneration((g) => g + 1);
  };

  const seed = useMemo(
    () =>
      seedFromString(
        `${normalizedWords.join("|")}|${gridSize}|${allowDiagonal}|${allowBackwards}|${generation}`,
      ),
    [normalizedWords, gridSize, allowDiagonal, allowBackwards, generation],
  );

  const puzzle = useMemo(
    () =>
      generatePuzzle({
        seed,
        gridSize,
        words: normalizedWords,
        allowDiagonal,
        allowBackwards,
      }),
    [seed, gridSize, normalizedWords, allowDiagonal, allowBackwards],
  );

  const isPuzzleValid =
    normalizedWords.length > 0 && puzzle.placements.length === normalizedWords.length;

  return (
    <div className="card">
      <div className="form-grid no-print">
        {initialThemeName?.trim() ? (
          <p className="badge">Custom theme: {initialThemeName.trim()}</p>
        ) : null}
        
        <div className="field">
          <label htmlFor="auto-count">Auto-generate random words</label>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <input
              id="auto-count"
              type="number"
              min="2"
              max="30"
              value={autoCount}
              onChange={(e) => setAutoCount(parseInt(e.target.value) || 0)}
              style={{ width: "80px" }}
            />
            <button className="button button-outline" type="button" onClick={handleAutoFill}>
              Fill word list
            </button>
          </div>
        </div>

        <div className="field">
          <label htmlFor="word-list">Word list (comma or new line separated)</label>
          <textarea
            id="word-list"
            value={rawWords}
            onChange={(event) => setRawWords(event.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="grid-size">Grid size</label>
          <select
            id="grid-size"
            value={gridSize}
            onChange={(event) => setGridSize(Number(event.target.value))}
          >
            {GRID_OPTIONS.map((size) => (
              <option key={size} value={size}>
                {size} x {size}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Difficulty options</label>
          <div className="hero-actions">
            <button
              className="button button-outline"
              type="button"
              onClick={() => setAllowDiagonal((value) => !value)}
              aria-pressed={allowDiagonal}
            >
              {allowDiagonal ? "Diagonal on" : "Diagonal off"}
            </button>
            <button
              className="button button-outline"
              type="button"
              onClick={() => setAllowBackwards((value) => !value)}
              aria-pressed={allowBackwards}
            >
              {allowBackwards ? "Backwards on" : "Backwards off"}
            </button>
          </div>
        </div>
        <div className="hero-actions">
          <button
            className="button button-solid"
            type="button"
            onClick={() => setGeneration((value) => value + 1)}
          >
            Generate puzzle
          </button>
          <button className="button button-outline" type="button" onClick={() => window.print()}>
            Print puzzle
          </button>
        </div>
        {!isPuzzleValid ? (
          <p className="badge no-print">
            Some words do not fit in the grid. Try fewer words or a larger size.
          </p>
        ) : null}
      </div>
      {normalizedWords.length > 0 && isPuzzleValid ? (
        <div className="reveal reveal-delay-1" style={{ marginTop: "1.5rem" }}>
          <PuzzleBoard
            puzzle={puzzle}
            title="Your custom puzzle"
            onNewPuzzle={() => setGeneration((value) => value + 1)}
            newPuzzleLabel="New layout"
          />
        </div>
      ) : (
        <p className="badge no-print" style={{ marginTop: "1.5rem" }}>
          Add at least two words and keep them short enough to fit the grid.
        </p>
      )}
    </div>
  );
}
