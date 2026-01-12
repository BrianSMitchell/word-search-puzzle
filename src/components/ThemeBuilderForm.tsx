"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const DEFAULT_THEME_NAME = "Custom theme";

export function ThemeBuilderForm() {
  const router = useRouter();
  const [themeName, setThemeName] = useState(DEFAULT_THEME_NAME);
  const [words, setWords] = useState("");

  const canSubmit = useMemo(() => {
    return themeName.trim().length > 0 && words.trim().length > 0;
  }, [themeName, words]);

  const handleSubmit = () => {
    const params = new URLSearchParams();
    params.set("theme", themeName.trim());
    params.set("words", words.trim());
    router.push(`/word-search-generator?${params.toString()}`);
  };

  return (
    <div className="card">
      <h2>Create your own theme</h2>
      <p className="prose">
        Add a theme name and a list of words to build a custom word search. We&apos;ll
        take you to the generator with your theme prefilled.
      </p>
      <div className="form-grid" style={{ marginTop: "1rem" }}>
        <div className="field">
          <label htmlFor="theme-name">Theme name</label>
          <input
            id="theme-name"
            type="text"
            value={themeName}
            onChange={(event) => setThemeName(event.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="theme-words">Words (comma or new line separated)</label>
          <textarea
            id="theme-words"
            value={words}
            onChange={(event) => setWords(event.target.value)}
          />
        </div>
        <button
          className="button button-solid"
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit}
        >
          Build this theme
        </button>
      </div>
    </div>
  );
}
