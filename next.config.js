/** @type {import('next').NextConfig} */

const locales = require('./locales.config.json')

const nextConfig = {
  reactStrictMode: true,
  i18n: locales,
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ['error']
    },
    reactRemoveProperties: true
  }
}

module.exports = nextConfig
