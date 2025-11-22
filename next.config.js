/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // No basePath needed for custom domain (root domain)
  basePath: '',
}

module.exports = nextConfig
