/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['metalstation.herokuapp.com', 'localhost'],
  },
}

module.exports = nextConfig
