/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // This helps with static hosting
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig