/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'http://metalstation.herokuapp.com', 'https://metalstation.vercel.app/', 'https://metalstation.herokuapp.com/'],
  },
}

module.exports = nextConfig
