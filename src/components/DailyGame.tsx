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
    <div className="relative max-w-[960px] mx-auto">
      <div className="flex justify-between items-center mb-4 bg-muted/30 p-3 rounded-lg border border-border">
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2">
             <span className="text-2xl" role="img" aria-label="fire">🔥</span>
             <div>
               <div className="font-bold text-lg leading-none">
                 {stats.currentStreak} Day Streak
               </div>
               <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                 Keep it up!
               </div>
             </div>
           </div>
           
           <div className="hidden sm:block w-px h-8 bg-border" />

           <div className="hidden sm:block">
             <div className="font-bold text-lg leading-none">
               {stats.totalCompleted}
             </div>
             <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
               Solved
             </div>
           </div>
        </div>
        
        <button
          type="button"
          onClick={() => setIsSoundEnabled(!isSoundEnabled)}
          className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-background transition-colors"
        >
          {isSoundEnabled ? (
            <>
              <span>🔊</span> <span className="hidden sm:inline">Sound On</span>
            </>
          ) : (
            <>
              <span>🔇</span> <span className="hidden sm:inline">Sound Off</span>
            </>
          )}
        </button>
      </div>

      <PuzzleBoard
        puzzle={puzzle}
        title="Daily Puzzle"
        onWordFound={() => playSound("/sounds/pop.mp3")}
        onComplete={() => {
          playSound("/sounds/win.mp3");
          incrementCompleted(true);
        }}
      />
    </div>
  );
}
