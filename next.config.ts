import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local images and potential external sources
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
    // Optimize images for performance
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
