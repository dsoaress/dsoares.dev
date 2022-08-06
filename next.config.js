/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')

const locales = require('./locales.config.json')

const nextConfig = {
  reactStrictMode: true,
  i18n: locales,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  },
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ['error']
    },
    reactRemoveProperties: true
  }
}

module.exports = withPWA(nextConfig)
