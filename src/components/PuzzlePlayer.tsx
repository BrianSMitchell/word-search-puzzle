"use client";

import { generatePuzzle } from "@/lib/puzzle/generator";
import { seedFromString } from "@/lib/puzzle/rng";
import type { PuzzleConfig } from "@/lib/puzzle/types";
import { useMemo, useState } from "react";
import { PuzzleBoard } from "./PuzzleBoard";

import { useSound } from "@/hooks/useSound";

type PuzzlePlayerProps = {
  config: Omit<PuzzleConfig, "seed">;
  initialSeed: number;
  title?: string;
  newPuzzleLabel?: string;
  onComplete?: () => void;
};

export function PuzzlePlayer({
  config,
  initialSeed,
  title,
  newPuzzleLabel,
  onComplete,
}: PuzzlePlayerProps) {
  const [seed, setSeed] = useState(initialSeed);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  const activeWords = useMemo(() => {
    // If the word list is short, use it all
    if (config.words.length <= 15) return config.words;
    
    // Otherwise, pick a subset of 12 words deterministically based on seed
    // We want this subset to change when the seed changes
    const shuffled = [...config.words].sort((a, b) => {
      const valA = seedFromString(`${a}-${seed}`);
      const valB = seedFromString(`${b}-${seed}`);
      return valA - valB;
    });
    
    return shuffled.slice(0, 12);
  }, [config.words, seed]);

  const puzzle = useMemo(() => generatePuzzle({ ...config, words: activeWords, seed }), [config, activeWords, seed]);
  const { playSound } = useSound(isSoundEnabled);

  return (
      <PuzzleBoard
        puzzle={puzzle}
        title={title}
        onNewPuzzle={() => setSeed((prev) => prev + 1)}
        newPuzzleLabel={newPuzzleLabel}
        onWordFound={() => playSound("/sounds/pop.mp3")}
        onComplete={() => {
          playSound("/sounds/win.mp3");
          onComplete?.();
        }}
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
  );
}
