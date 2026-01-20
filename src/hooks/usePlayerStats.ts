"use client";

import { logGameEvent } from "@/app/actions/analytics";
import { useEffect, useState } from "react";

type PlayerStats = {
  lastPlayed: string | null; // ISO date string (YYYY-MM-DD)
  currentStreak: number;
  maxStreak: number;
  totalCompleted: number;
  totalPrinted: number;
};

const STORAGE_KEY = "word-search-player-stats";
// Backward compatibility key check could be added, but for now we'll start fresh or migrate if needed.
// Simplest migration: check old key, if exists, import it.
const OLD_STORAGE_KEY = "word-search-daily-streak";

export function usePlayerStats() {
  const [stats, setStats] = useState<PlayerStats>({
    lastPlayed: null,
    currentStreak: 0,
    maxStreak: 0,
    totalCompleted: 0,
    totalPrinted: 0,
  });

  // Load from local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setStats(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse player stats", e);
      }
    } else {
      // Migration: Try to load old streak data
      const oldStored = localStorage.getItem(OLD_STORAGE_KEY);
      if (oldStored) {
        try {
          const oldData = JSON.parse(oldStored);
          setStats((prev) => ({
            ...prev,
            lastPlayed: oldData.lastPlayed,
            currentStreak: oldData.currentStreak,
            maxStreak: oldData.maxStreak,
          }));
        } catch (e) {
             // ignore
        }
      }
    }
  }, []);

  const saveStats = (newStats: PlayerStats) => {
    setStats(newStats);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newStats));
  };

  const incrementCompleted = (isDaily: boolean = false) => {
    const today = new Date().toISOString().split("T")[0];
    let newCurrentStreak = stats.currentStreak;
    let newLastPlayed = stats.lastPlayed;
    
    // Streak logic only applies if it's the daily puzzle
    if (isDaily) {
        if (stats.lastPlayed !== today) {
            if (stats.lastPlayed) {
                const last = new Date(stats.lastPlayed);
                const now = new Date(today);
                const diffTime = Math.abs(now.getTime() - last.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                
                if (diffDays === 1) {
                    newCurrentStreak = stats.currentStreak + 1;
                } else {
                    newCurrentStreak = 1;
                }
            } else {
                newCurrentStreak = 1;
            }
            newLastPlayed = today;
        }
    }

    const newStats: PlayerStats = {
        ...stats,
        totalCompleted: stats.totalCompleted + 1,
        currentStreak: newCurrentStreak,
        maxStreak: Math.max(newCurrentStreak, stats.maxStreak),
        lastPlayed: newLastPlayed,
    };
    saveStats(newStats);

    // Backend logging (non-blocking)
    logGameEvent("puzzle_completed", { isDaily, streak: newCurrentStreak }).catch(console.error);
  };

  const incrementPrinted = () => {
    const newStats = {
        ...stats,
        totalPrinted: stats.totalPrinted + 1,
    };
    saveStats(newStats);

    // Backend logging (non-blocking)
    logGameEvent("puzzle_printed", undefined).catch(console.error);
  };

  return {
    stats,
    incrementCompleted,
    incrementPrinted,
  };
}
