"use client";

import { useSound } from "@/hooks/useSound";
import { generatePuzzle } from "@/lib/puzzle/generator";
import { seedFromString } from "@/lib/puzzle/rng";
import { THEMED_PAGES } from "@/lib/puzzle/themedPages";
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
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState<string>("random");
  const { playSound } = useSound(isSoundEnabled);

  const normalizedWords = useMemo(() => {
    const list = rawWords.split(/[\n,]+/).map((word) => word.trim());
    return normalizeWords(list, gridSize);
  }, [rawWords, gridSize]);

  const handleAutoFill = () => {
    let pool: string[] = [];
    
    if (selectedTheme === "random") {
      pool = THEMED_PAGES.flatMap(t => t.words);
    } else {
      const theme = THEMED_PAGES.find(t => t.slug === selectedTheme);
      if (theme) pool = theme.words;
    }

    if (pool.length === 0) return;

    // Use a more robust shuffle to ensure different results each click
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Take autoCount words
    const selected = shuffled.slice(0, Math.min(autoCount, 50));
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
      <div className="generator-content">
        <div className="form-grid no-print">
          {initialThemeName?.trim() ? (
            <p className="badge">Custom theme: {initialThemeName.trim()}</p>
          ) : null}
          
          <div className="field">
            <label htmlFor="theme-select">Choose a theme to auto-fill</label>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <select
                id="theme-select"
                className="select"
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value)}
                style={{ flex: 1 }}
              >
                <option value="random">Random Mix (All Themes)</option>
                <optgroup label="Education">
                  {THEMED_PAGES.filter(p => p.category === "education").map(p => (
                    <option key={p.slug} value={p.slug}>{p.name}</option>
                  ))}
                </optgroup>
                <optgroup label="Lifestyle & Fun">
                  {THEMED_PAGES.filter(p => ["animals", "lifestyle", "nature"].includes(p.category)).map(p => (
                    <option key={p.slug} value={p.slug}>{p.name}</option>
                  ))}
                </optgroup>
                <optgroup label="Holidays">
                  {THEMED_PAGES.filter(p => p.category === "holiday").map(p => (
                    <option key={p.slug} value={p.slug}>{p.name}</option>
                  ))}
                </optgroup>
                <optgroup label="General">
                  {THEMED_PAGES.filter(p => p.category === "general").map(p => (
                    <option key={p.slug} value={p.slug}>{p.name}</option>
                  ))}
                </optgroup>
              </select>
              <button className="button button-outline" type="button" onClick={handleAutoFill}>
                Fill list
              </button>
            </div>
          </div>

          <div className="field">
            <label htmlFor="auto-count">Number of words to generate</label>
            <input
              id="auto-count"
              type="number"
              min="2"
              max="30"
              value={autoCount}
              onChange={(e) => setAutoCount(parseInt(e.target.value) || 0)}
              style={{ width: "100%" }}
            />
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

        <div className="generator-preview">
          {normalizedWords.length > 0 && isPuzzleValid ? (
            <div className="reveal reveal-delay-1">
              <PuzzleBoard
                puzzle={puzzle}
                onNewPuzzle={() => setGeneration((value) => value + 1)}
                newPuzzleLabel="New layout"
                onWordFound={() => playSound("/sounds/pop.mp3")}
                onComplete={() => playSound("/sounds/win.mp3")}
                sidecarFooter={
                  <div className="flex items-center justify-between px-2 pt-2">
                    <div className="text-[11px] text-[var(--muted)] uppercase tracking-widest font-black">
                      Sound Support
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                      style={{ 
                        backgroundColor: 'var(--accent)', 
                        color: '#000000',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                        border: '2px solid rgba(0,0,0,0.1)'
                      }}
                      className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] py-3 px-5 rounded-2xl transition-all hover:scale-105 active:scale-95 hover:brightness-110"
                    >
                      {isSoundEnabled ? (
                        <><span className="text-xl">🔊</span> On</>
                      ) : (
                        <><span className="text-xl opacity-70">🔇</span> Off</>
                      )}
                    </button>
                  </div>
                }
              />
            </div>
          ) : (
            <p className="badge no-print">
              Add at least two words and keep them short enough to fit the grid.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
