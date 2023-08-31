/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['galaso-strapi-images.s3.amazonaws.com', 'images.ctfassets.net'],
  },
}

module.exports = nextConfig
