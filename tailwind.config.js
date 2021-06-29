const { coolGray, rose } = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: rose,
        neutral: coolGray
      }
    }
  }
}
