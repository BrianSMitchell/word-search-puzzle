"use client";

import Link from "next/link";
import styles from "./SiteHeader.module.css";
import { ThemeControls } from "./ThemeControls";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link className={styles.logo} href="/">
            Word Search Puzzle
          </Link>
          <nav className={styles.nav} aria-label="Primary">
            <Link href="/daily-word-search">Daily Word Search</Link>
            <Link href="/themed-word-search-puzzles">Themed Puzzles</Link>
            <Link href="/word-search-generator">Word Search Generator</Link>
            <Link href="/printable-word-search">Printable Puzzles</Link>
            <Link href="/blog">Blog</Link>
          </nav>
          <ThemeControls />
        </div>
      </div>
    </header>
  );
}
