import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "img.lazcdn.com" },
      { hostname: "img.drz.lazcdn.com" },
      { hostname: "cdn.dummyjson.com" },
      { hostname: "dummyjson.com" },
    ],
  },
};

export default nextConfig;
