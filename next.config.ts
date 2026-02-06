import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

export default nextConfig;
