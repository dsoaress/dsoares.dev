const withPWA = require('next-pwa')

const nextConfig = {
  images: { domains: ['avatars.githubusercontent.com', 'res.cloudinary.com'] },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  }
}

module.exports = withPWA(nextConfig)
