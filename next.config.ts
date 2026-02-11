import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  images: {
    loader: "default",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.invert.studio",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "inv-admin.ptzsite.ru",
        pathname: "/**",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

export default nextConfig;
