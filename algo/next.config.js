/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'algofolks.com',
      },
      {
        protocol: 'https',
        hostname: 'stock.adobe.com',
      },
      {
        protocol: 'https',
        hostname: 'as1.ftcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'as2.ftcdn.net',
      }
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
},
}

module.exports = nextConfig 