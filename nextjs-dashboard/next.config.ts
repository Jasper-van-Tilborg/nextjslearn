import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // experimental: {
  //   ppr: 'incremental'
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Ensure proper static file serving
  trailingSlash: false,
  // Fix workspace root warning
  outputFileTracingRoot: './',
  // Remove standalone output for Vercel compatibility
  // output: 'standalone',
};

export default nextConfig;
