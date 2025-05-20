
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  experimental: {
    appDir: false
  }
};

module.exports = nextConfig;
