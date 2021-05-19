const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en'
  },
  images: { domains: ['dash.dsoares.me'] },
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  }
}

module.exports = withBundleAnalyzer(withPWA(nextConfig))
