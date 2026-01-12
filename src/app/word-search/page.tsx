import { redirect } from "next/navigation";

export const metadata = {
  title: "Themed Word Search Puzzles",
};

export default function WordSearchPage() {
  redirect("/themed-word-search-puzzles");
}
