const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: colors.rose,
        neutral: colors.coolGray
      },
      fontFamily: {
        body: 'Mulish, sans-serif'
      }
    }
  }
}
