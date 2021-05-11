const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: {
    content: ['./pages/**/*.js', './components/**/*.js'],
    options: {
      safelist: [
        'gray',
        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'teal',
        'lightBlue',
        'purple',
        'rose',
        'fuchsia'
      ]
    }
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: colors.rose,
        secondary: colors.lightBlue,
        neutral: colors.coolGray,
        ...colors
      },
      fontFamily: {
        body: 'Rubik, sans-serif',
        'mono-black': 'Rubik Mono One, sans-serif'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
