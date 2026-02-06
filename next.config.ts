import type { NextConfig } from "next";
// @ts-expect-error next-translate-plugin is CommonJS
import nextTranslate from "next-translate-plugin";

const nextConfig: NextConfig = {
  turbopack: {},
  images: {
    loader: "default",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.invert.studio",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

const config = nextTranslate(nextConfig);
// App Router does not support next.config i18n; next-translate uses i18n.js and plugin only
if ("i18n" in config) delete (config as Record<string, unknown>).i18n;
export default config;
