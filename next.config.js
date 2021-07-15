const withPWA = require('next-pwa')

const { i18n } = require('./locales.config')

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['res.cloudinary.com']
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  }
}

module.exports = withPWA(nextConfig)
