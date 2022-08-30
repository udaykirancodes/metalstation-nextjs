/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'http://metalstation.herokuapp.com', 'http://main-metalstation.herokuapp.com'],
  },
}

module.exports = nextConfig
