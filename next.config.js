/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')

const locales = require('./locales')

const nextConfig = {
  reactStrictMode: true,
  i18n: locales,
  images: {
    domains: [process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/^https?:\/\//, '')]
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  },
  async rewrites() {
    return [{ source: '/posts', destination: '/' }]
  }
}

module.exports = withPWA(nextConfig)
