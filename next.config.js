/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'galaso-strapi-images.s3.amazonaws.com'
      }, 
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net'
      }
    ],
  },
}

module.exports = nextConfig
