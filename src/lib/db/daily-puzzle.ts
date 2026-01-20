import { createAdminClient } from "@/utils/supabase/admin";
import { createClient } from "@/utils/supabase/server";

export type DailyPuzzleData = {
  date: string;
  words: string[];
  grid: string[][]; // 2D array of characters
};

/**
 * Try to get the daily puzzle from the DB.
 */
export async function getDailyPuzzleFromDB(date: string): Promise<DailyPuzzleData | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("daily_puzzles")
    .select("date, words, grid")
    .eq("date", date)
    .single();

  if (error) {
    if (error.code !== "PGRST116") { // non-404 error
       console.error("Error fetching daily puzzle from DB:", error);
    }
    return null;
  }

  return data as DailyPuzzleData;
}

/**
 * Save a generated puzzle to the DB.
 * Uses upsert to avoid race conditions if multiple requests try to generate simultaneously.
 * Uses ADMIN client to bypass RLS policies (since user is anon).
 */
export async function saveDailyPuzzleToDB(puzzle: DailyPuzzleData): Promise<void> {
  console.log(`[DailyPuzzle] Attempting to save puzzle for ${puzzle.date}`);
  
  const supabase = createAdminClient();
  const { error } = await supabase
    .from("daily_puzzles")
    .upsert(
      {
        date: puzzle.date,
        words: puzzle.words,
        grid: puzzle.grid,
      },
      { onConflict: "date" }
    );

  if (error) {
    console.error("[DailyPuzzle] Error saving daily puzzle to DB:", error);
  } else {
    console.log(`[DailyPuzzle] Successfully saved puzzle for ${puzzle.date}`);
  }
}
