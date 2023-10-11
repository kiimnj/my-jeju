/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
module.exports = {
    nextConfig,
    experimental: {
      serverActions: true,
    },
    reactStrictMode: false,
  }; 