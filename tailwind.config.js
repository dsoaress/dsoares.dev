const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.rose,
        neutral: colors.coolGray
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
