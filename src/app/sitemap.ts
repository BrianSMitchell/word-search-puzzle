import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { getRecentDateKeys } from "@/lib/puzzle/daily";
import { THEMES } from "@/lib/puzzle/themes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/daily-word-search",
    "/word-search",
    "/easy-word-search",
    "/medium-word-search",
    "/hard-word-search",
    "/word-search-generator",
    "/printable-word-search",
  ];

  const dailyRoutes = getRecentDateKeys(30).map((date) => ({
    url: `${base}/daily-word-search/${date}`,
    lastModified: date,
  }));

  const themeRoutes = THEMES.map((theme) => ({
    url: `${base}/word-search/${theme.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
    })),
    ...dailyRoutes,
    ...themeRoutes,
  ];
}
