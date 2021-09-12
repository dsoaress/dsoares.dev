const withPWA = require('next-pwa')

const { i18n } = require('./locales.config')

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['images.prismic.io']
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, module: false }
    return config
  }
}

module.exports = withPWA(nextConfig)
