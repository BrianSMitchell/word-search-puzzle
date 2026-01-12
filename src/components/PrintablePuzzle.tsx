import type { Puzzle } from "@/lib/puzzle/types";
import styles from "./PrintablePuzzle.module.css";

type PrintablePuzzleProps = {
  puzzle: Puzzle;
  title: string;
  description?: string;
};

export function PrintablePuzzle({ puzzle, title, description }: PrintablePuzzleProps) {
  return (
    <section className={styles.printable}>
      <header className={styles.header}>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </header>
      <div
        className={styles.grid}
        style={{ gridTemplateColumns: `repeat(${puzzle.size}, minmax(0, 1fr))` }}
        aria-label="Printable word search grid"
      >
        {puzzle.grid.flatMap((row, rowIndex) =>
          row.map((letter, colIndex) => (
            <span key={`${rowIndex}-${colIndex}`} className={styles.cell}>
              {letter}
            </span>
          )),
        )}
      </div>
      <div className={styles.wordList}>
        <h3>Words to find</h3>
        <ul>
          {puzzle.words.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
