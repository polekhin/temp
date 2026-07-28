import type { NextConfig } from "next";

const isGitHubPages =
  process.env.GITHUB_PAGES === "true" || process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: "/temp",
        assetPrefix: "/temp",
        trailingSlash: true,
        images: { unoptimized: true },
        typescript: { tsconfigPath: "tsconfig.pages.json" },
      }
    : {}),
};

export default nextConfig;
