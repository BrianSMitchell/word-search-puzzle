"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";
type ContrastMode = "standard" | "high";

const THEME_KEY = "wsp-theme";
const CONTRAST_KEY = "wsp-contrast";

export function ThemeControls() {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [contrast, setContrast] = useState<ContrastMode>("standard");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_KEY) as ThemeMode | null;
    const storedContrast = window.localStorage.getItem(CONTRAST_KEY) as ContrastMode | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = storedTheme ?? (prefersDark ? "dark" : "light");
    const nextContrast = storedContrast === "high" ? "high" : "standard";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.dataset.contrast = nextContrast;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(nextTheme);
    setContrast(nextContrast);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) {
      return;
    }
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme, isInitialized]);

  useEffect(() => {
    if (!isInitialized) {
      return;
    }
    document.documentElement.dataset.contrast = contrast;
    window.localStorage.setItem(CONTRAST_KEY, contrast);
  }, [contrast, isInitialized]);

  return (
    <div className="theme-controls" aria-label="Display controls">
      <button
        className="button button-ghost"
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-pressed={theme === "dark"}
      >
        Dark mode
      </button>
      <button
        className="button button-ghost"
        type="button"
        onClick={() => setContrast(contrast === "high" ? "standard" : "high")}
        aria-pressed={contrast === "high"}
      >
        High contrast
      </button>
    </div>
  );
}
