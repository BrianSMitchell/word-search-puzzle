import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/word-search",
        destination: "/themed-word-search-puzzles",
        permanent: true,
      },
      {
        source: "/word-search/:theme",
        destination: "/themed-word-search-puzzles/:theme",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
