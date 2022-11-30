/** @type {import('next').NextConfig} */
const path = require('path')


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'lib/assets')],
  },
}

module.exports = nextConfig
