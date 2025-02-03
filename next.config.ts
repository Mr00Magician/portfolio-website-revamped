import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all HTTPS images
      },
      {
        protocol: "http",
        hostname: "**", // Allows all HTTP images
      },
    ],
    // minimumCacheTTL: 1,
  },
};

export default nextConfig;
