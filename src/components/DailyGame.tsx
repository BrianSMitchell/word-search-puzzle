"use client";

import { usePlayerStats } from "@/hooks/usePlayerStats";
import { useSound } from "@/hooks/useSound";
import type { Puzzle } from "@/lib/puzzle/types";
import { useState } from "react";
import { PuzzleBoard } from "./PuzzleBoard";

export function DailyGame({ puzzle }: { puzzle: Puzzle }) {
  const { stats, incrementCompleted } = usePlayerStats();
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const { playSound } = useSound(isSoundEnabled);

  return (
    <div className="mx-auto">
      <PuzzleBoard
        puzzle={puzzle}
        onWordFound={() => playSound("/sounds/pop.mp3")}
        onComplete={() => {
          playSound("/sounds/win.mp3");
          incrementCompleted(true);
        }}
        sidecarFooter={
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 bg-muted/20 p-2.5 rounded-lg border border-border/50">
              <span className="text-xl" role="img" aria-label="fire">🔥</span>
              <div>
                <div className="font-bold text-base leading-none">
                  {stats.currentStreak} Day Streak
                </div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold mt-1">
                  Keep it up!
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between px-1">
              <div>
                <div className="font-bold text-lg leading-none">
                  {stats.totalCompleted}
                </div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">
                  Solved
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-tight py-1 px-2 rounded-md hover:bg-muted/30 transition-colors border border-border/40"
              >
                {isSoundEnabled ? (
                  <><span>🔊</span> On</>
                ) : (
                  <><span>🔇</span> Off</>
                )}
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
}
