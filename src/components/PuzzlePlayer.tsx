"use client";

import { useMemo, useState } from "react";
import { generatePuzzle } from "@/lib/puzzle/generator";
import type { PuzzleConfig } from "@/lib/puzzle/types";
import { PuzzleBoard } from "./PuzzleBoard";

type PuzzlePlayerProps = {
  config: Omit<PuzzleConfig, "seed">;
  initialSeed: number;
  title?: string;
  newPuzzleLabel?: string;
};

export function PuzzlePlayer({ config, initialSeed, title, newPuzzleLabel }: PuzzlePlayerProps) {
  const [seed, setSeed] = useState(initialSeed);
  const puzzle = useMemo(() => generatePuzzle({ ...config, seed }), [config, seed]);

  return (
    <PuzzleBoard
      puzzle={puzzle}
      title={title}
      onNewPuzzle={() => setSeed((prev) => prev + 1)}
      newPuzzleLabel={newPuzzleLabel}
    />
  );
}
