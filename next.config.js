const withPWA = require('next-pwa')

module.exports = withPWA({
  i18n: {
    locales: ['en', 'es', 'pt'],
    defaultLocale: 'en'
  }
})
