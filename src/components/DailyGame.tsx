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
            <div className="flex items-center gap-4 bg-muted/30 p-3.5 rounded-xl border-2 border-border/80 shadow-inner">
              <span className="text-2xl drop-shadow-sm" role="img" aria-label="fire">🔥</span>
              <div>
                <div className="font-black text-lg leading-none text-[var(--text)]">
                  {stats.currentStreak} Day Streak
                </div>
                <div className="text-[10px] text-[var(--muted)] uppercase tracking-[0.15em] font-black mt-1.5 opacity-90">
                  Keep it up!
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between px-2 pt-2">
              <div>
                <div className="font-black text-2xl leading-none text-[var(--text)]">
                  {stats.totalCompleted}
                </div>
                <div className="text-[11px] text-[var(--muted)] uppercase tracking-widest font-black mt-1">
                  Solved
                </div>
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
                  <><span className="text-xl">🔊</span> Sound On</>
                ) : (
                  <><span className="text-xl opacity-70">🔇</span> Sound Off</>
                )}
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
}
