/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Ensure proper static file serving
  trailingSlash: false,
  // External packages for server components
  serverExternalPackages: ["postgres"],
  // Fix workspace root warning
  outputFileTracingRoot: "../",
};

module.exports = nextConfig;
