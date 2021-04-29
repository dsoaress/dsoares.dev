const withPWA = require('next-pwa')

const nextConfig = {
  images: { domains: ['avatars.githubusercontent.com'] },
  i18n: {
    locales: process.env.LOCALES.split(','),
    defaultLocale: process.env.DEFAULT_LOCALE
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  }
}

module.exports = withPWA(nextConfig)
