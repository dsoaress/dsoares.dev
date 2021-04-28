const withPWA = require('next-pwa')

const nextConfig = {
  i18n: {
    locales: ['en', 'es', 'pt'],
    defaultLocale: 'en'
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  }
}

module.exports = withPWA(nextConfig)
