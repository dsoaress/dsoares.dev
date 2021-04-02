const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development'
  },
  i18n: {
    locales: ['en', 'es', 'pt'],
    defaultLocale: 'en'
  }
})
