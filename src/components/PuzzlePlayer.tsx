"use client";

import { generatePuzzle } from "@/lib/puzzle/generator";
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
  const puzzle = useMemo(() => generatePuzzle({ ...config, seed }), [config, seed]);
  const { playSound } = useSound(isSoundEnabled);

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 z-10 p-2">
         <button
          type="button"
          onClick={() => setIsSoundEnabled(!isSoundEnabled)}
          className="text-sm px-2 py-1 rounded bg-background border border-border shadow-sm hover:bg-muted"
          aria-label={isSoundEnabled ? "Mute sound" : "Enable sound"}
        >
          {isSoundEnabled ? "🔊" : "🔇"}
        </button>
      </div>
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
      />
    </div>
  );
}
