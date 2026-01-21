import { getAllPosts } from "@/lib/blog";
import { getRecentDateKeys } from "@/lib/puzzle/daily";
import { THEMED_PAGES } from "@/lib/puzzle/themedPages";
import { siteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/daily-word-search",
    "/themed-word-search-puzzles",
    "/easy-word-search",
    "/medium-word-search",
    "/hard-word-search",
    "/word-search-generator",
    "/printable-word-search",
    "/blog",
  ];

  const dailyRoutes = getRecentDateKeys(30).map((date) => ({
    url: `${base}/daily-word-search/${date}`,
    lastModified: date,
  }));

  const themedRoutes = THEMED_PAGES.map((theme) => ({
    url: `${base}/themed-word-search-puzzles/${theme.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
    })),
    ...dailyRoutes,
    ...themedRoutes,
    ...blogRoutes,
  ];
}
