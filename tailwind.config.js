const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        neutral: colors.coolGray
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif']
      }
    }
  }
}
