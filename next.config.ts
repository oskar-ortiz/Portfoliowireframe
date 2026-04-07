import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.programme-tv.net",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  ...(process.env.VERCEL ? {} : { distDir: ".next-app" }),
};

export default nextConfig;
