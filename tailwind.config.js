const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif']
      },
      fontWeight: {
        normal: 300
      },
      colors: {
        neutral: colors.gray,
        primary: colors.rose
      }
    }
  },
  plugins: []
}
