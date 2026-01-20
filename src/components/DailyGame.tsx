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
                className="flex items-center gap-2.5 text-xs font-black uppercase tracking-widest py-2.5 px-4 rounded-xl transition-all border-2 border-[var(--text)] bg-[var(--surface-raised)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] hover:border-[var(--accent)] hover:shadow-lg shadow-md group"
              >
                {isSoundEnabled ? (
                  <><span className="text-lg">🔊</span> <span className="text-[var(--text)] group-hover:text-[var(--accent-contrast)]">Sound On</span></>
                ) : (
                  <><span className="text-lg opacity-60">🔇</span> <span className="text-[var(--muted)] group-hover:text-[var(--accent-contrast)]">Sound Off</span></>
                )}
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
}
