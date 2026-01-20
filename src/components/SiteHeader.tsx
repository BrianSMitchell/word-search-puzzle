"use client";

import Link from "next/link";
import styles from "./SiteHeader.module.css";
import { ThemeControls } from "./ThemeControls";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link onClick={() => window.scrollTo(0, 0)} className={styles.logo} href="/">
            Word Search Puzzle
          </Link>
          <nav className={styles.nav} aria-label="Primary">
            <Link onClick={() => window.scrollTo(0, 0)} href="/daily-word-search">Daily Word Search</Link>
            <Link onClick={() => window.scrollTo(0, 0)} href="/themed-word-search-puzzles">Themed Puzzles</Link>
            <Link onClick={() => window.scrollTo(0, 0)} href="/word-search-generator">Word Search Generator</Link>
            <Link onClick={() => window.scrollTo(0, 0)} href="/printable-word-search">Printable Puzzles</Link>
            <Link onClick={() => window.scrollTo(0, 0)} href="/blog">Blog</Link>
          </nav>
          <ThemeControls />
        </div>
      </div>
    </header>
  );
}
