import { seedFromString } from "./rng";
import { DAILY_WORD_SETS } from "./words";

export function getDateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function getDailySeed(dateKey: string): number {
  return seedFromString(dateKey);
}

export function getDailyWords(dateKey: string): string[] {
  const index = seedFromString(dateKey) % DAILY_WORD_SETS.length;
  return DAILY_WORD_SETS[index];
}

export function getRecentDateKeys(count: number, from: Date = new Date()): string[] {
  const dates: string[] = [];
  const start = new Date(Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate()));
  for (let i = 0; i < count; i += 1) {
    const date = new Date(start);
    date.setUTCDate(start.getUTCDate() - i);
    dates.push(getDateKey(date));
  }
  return dates;
}
