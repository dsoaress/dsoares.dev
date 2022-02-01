const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fonts: {
        DEFAULT: ['Ubuntu', 'sans-serif']
      },
      colors: {
        neutral: colors.gray,
        primary: colors.rose
      }
    }
  },
  plugins: []
}
