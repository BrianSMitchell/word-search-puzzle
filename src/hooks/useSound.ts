"use client";

import { useCallback, useRef } from "react";

export function useSound(enabled: boolean = true) {
  const audioContextRef = useRef<AudioContext | null>(null);

  const playSound = useCallback((path: string) => {
    if (!enabled) return;

    try {
      const audio = new Audio(path);
      audio.volume = 0.5;
      audio.play().catch((e) => {
        console.warn("Audio play failed", e);
      });
    } catch (e) {
      console.warn("Audio initialization failed", e);
    }
  }, [enabled]);

  return { playSound };
}
