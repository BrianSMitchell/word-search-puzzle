import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { getRecentDateKeys } from "@/lib/puzzle/daily";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/daily-word-search",
    "/word-search-generator",
    "/printable-word-search",
  ];

  const dailyRoutes = getRecentDateKeys(30).map((date) => ({
    url: `${base}/daily-word-search/${date}`,
    lastModified: date,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
    })),
    ...dailyRoutes,
  ];
}
