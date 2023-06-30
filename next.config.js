/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['ddragon.leagueoflegends.com'],
  },
}

module.exports = nextConfig
