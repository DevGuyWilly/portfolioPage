/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages is served from a subpath, so we need to set the basePath
  basePath: process.env.NODE_ENV === 'production' ? '/portfolioPage' : '',
}

module.exports = nextConfig
