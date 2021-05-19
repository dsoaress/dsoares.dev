const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    content: ['./pages/**/*.js', './components/**/*.js']
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: colors.rose,
        secondary: colors.lightBlue,
        neutral: colors.coolGray
      },
      fontFamily: {
        body: 'Lato, sans-serif'
      }
    }
  }
}
