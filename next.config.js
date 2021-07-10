const withPWA = require('next-pwa')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
  },
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en'
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  }
}

module.exports = withPWA(nextConfig)
