import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'github.com' }]
  },
  rewrites: async () => [
    {
      source: '/script.js',
      destination: 'https://umami.dsoares.dev/script.js'
    }
  ]
}

export default nextConfig
