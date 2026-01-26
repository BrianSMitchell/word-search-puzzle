"use client";

import { generatePuzzle } from "@/lib/puzzle/generator";
import { seedFromString } from "@/lib/puzzle/rng";
import type { PuzzleConfig } from "@/lib/puzzle/types";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PuzzleBoard } from "./PuzzleBoard";
import { useSound } from "@/hooks/useSound";
import styles from "./QuickPlayChallenge.module.css";

type QuickPlayChallengeProps = {
  config: Omit<PuzzleConfig, "seed">;
  timeLimitSeconds?: number;
};

type GameState = "ready" | "playing" | "won" | "timeout";

export function QuickPlayChallenge({
  config,
  timeLimitSeconds = 60,
}: QuickPlayChallengeProps) {
  const [seed, setSeed] = useState(() => seedFromString("quickplay-" + Date.now()));
  const [gameState, setGameState] = useState<GameState>("ready");
  const [timeLeft, setTimeLeft] = useState(timeLimitSeconds);
  const [wordsFound, setWordsFound] = useState(0);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeWords = useMemo(() => {
    // Pick 6 words for quick play (achievable in 60 seconds)
    const shuffled = [...config.words].sort((a, b) => {
      const valA = seedFromString(`${a}-${seed}`);
      const valB = seedFromString(`${b}-${seed}`);
      return valA - valB;
    });
    return shuffled.slice(0, 6);
  }, [config.words, seed]);

  const puzzle = useMemo(
    () => generatePuzzle({ ...config, words: activeWords, seed, gridSize: 10 }),
    [config, activeWords, seed]
  );

  const { playSound } = useSound(isSoundEnabled);

  const startGame = useCallback(() => {
    setGameState("playing");
    setTimeLeft(timeLimitSeconds);
    setWordsFound(0);
  }, [timeLimitSeconds]);

  const resetGame = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setSeed(seedFromString("quickplay-" + Date.now()));
    setGameState("ready");
    setTimeLeft(timeLimitSeconds);
    setWordsFound(0);
  }, [timeLimitSeconds]);

  // Timer logic
  useEffect(() => {
    if (gameState !== "playing") {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameState("timeout");
          playSound("/sounds/pop.mp3");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState, playSound]);

  const handleWordFound = useCallback(() => {
    setWordsFound((prev) => prev + 1);
    playSound("/sounds/pop.mp3");
  }, [playSound]);

  const handleComplete = useCallback(() => {
    setGameState("won");
    playSound("/sounds/win.mp3");
  }, [playSound]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const totalWords = activeWords.length;

  return (
    <div className={styles.container}>
      {/* Challenge Header */}
      <div className={styles.challengeHeader}>
        <div className={styles.challengeInfo}>
          {gameState === "ready" && (
            <>
              <h2 className={styles.challengeTitle}>⚡ Quick Challenge</h2>
              <p className={styles.challengeSubtitle}>
                Find {totalWords} words in {timeLimitSeconds} seconds. Ready?
              </p>
            </>
          )}
          {gameState === "playing" && (
            <>
              <div className={styles.timerDisplay}>
                <span className={timeLeft <= 10 ? styles.timerWarning : ""}>
                  {formatTime(timeLeft)}
                </span>
              </div>
              <div className={styles.progress}>
                {wordsFound} / {totalWords} words found
              </div>
            </>
          )}
          {gameState === "won" && (
            <>
              <h2 className={styles.winTitle}>🎉 You did it!</h2>
              <p className={styles.winSubtitle}>
                All {totalWords} words found with {formatTime(timeLeft)} left!
              </p>
            </>
          )}
          {gameState === "timeout" && (
            <>
              <h2 className={styles.timeoutTitle}>⏰ Time's up!</h2>
              <p className={styles.timeoutSubtitle}>
                You found {wordsFound} of {totalWords} words. Try again?
              </p>
            </>
          )}
        </div>
      </div>

      {/* Game States */}
      {gameState === "ready" && (
        <div className={styles.readyState}>
          <button className={styles.startButton} onClick={startGame}>
            Start Challenge
          </button>
          <p className={styles.hint}>
            Or <Link href="/daily-word-search">try the daily puzzle</Link> for a relaxed experience
          </p>
        </div>
      )}

      {gameState === "playing" && (
        <PuzzleBoard
          puzzle={puzzle}
          onWordFound={handleWordFound}
          onComplete={handleComplete}
          sidecarFooter={
            <div className={styles.soundToggle}>
              <button
                type="button"
                onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                className={styles.soundButton}
              >
                {isSoundEnabled ? "🔊 Sound On" : "🔇 Sound Off"}
              </button>
            </div>
          }
        />
      )}

      {(gameState === "won" || gameState === "timeout") && (
        <div className={styles.endState}>
          <div className={styles.endActions}>
            <button className={styles.playAgainButton} onClick={resetGame}>
              Play Again
            </button>
            <Link href="/daily-word-search" className={styles.dailyLink}>
              Try Daily Challenge
            </Link>
            <Link href="/word-search-generator" className={styles.generatorLink}>
              Create Custom Puzzle
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
