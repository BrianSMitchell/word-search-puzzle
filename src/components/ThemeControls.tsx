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
    setTheme(nextTheme);
    setContrast(nextContrast);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;
    document.documentElement.dataset.contrast = contrast;
    window.localStorage.setItem(CONTRAST_KEY, contrast);
  }, [contrast, isInitialized]);

  return (
    <div className="theme-controls" aria-label="Display controls">
      <button
        className="icon-button"
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-pressed={theme === "dark"}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        title={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
      <button
        className="icon-button"
        type="button"
        onClick={() => setContrast(contrast === "high" ? "standard" : "high")}
        aria-pressed={contrast === "high"}
        aria-label={contrast === "high" ? "Switch to standard contrast" : "Switch to high contrast"}
        title={contrast === "high" ? "Standard contrast" : "High contrast"}
      >
        ◐
      </button>
    </div>
  );
}
