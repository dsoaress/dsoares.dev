const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: {
    content: ['./pages/**/*.js', './components/**/*.js'],
    options: {
      safelist: [
        'bg-gray-300',
        'bg-gray-400',
        'bg-gray-500',
        'bg-gray-600',
        'text-gray-100',
        'text-gray-900',

        'bg-red-300',
        'bg-red-400',
        'bg-red-500',
        'bg-red-600',
        'text-red-100',
        'text-red-900',

        'bg-orange-300',
        'bg-orange-400',
        'bg-orange-500',
        'bg-orange-600',
        'text-orange-100',
        'text-orange-900',

        'bg-yellow-300',
        'bg-yellow-400',
        'bg-yellow-500',
        'bg-yellow-600',
        'text-yellow-100',
        'text-yellow-900',

        'bg-lime-300',
        'bg-lime-400',
        'bg-lime-500',
        'bg-lime-600',
        'text-lime-100',
        'text-lime-900',

        'bg-green-300',
        'bg-green-400',
        'bg-green-500',
        'bg-green-600',
        'text-green-100',
        'text-green-900',

        'bg-teal-300',
        'bg-teal-400',
        'bg-teal-500',
        'bg-teal-600',
        'text-teal-100',
        'text-teal-900',

        'bg-lightBlue-300',
        'bg-lightBlue-400',
        'bg-lightBlue-500',
        'bg-lightBlue-600',
        'text-lightBlue-100',
        'text-lightBlue-900',

        'bg-purple-300',
        'bg-purple-400',
        'bg-purple-500',
        'bg-purple-600',
        'text-purple-100',
        'text-purple-900',

        'bg-rose-300',
        'bg-rose-400',
        'bg-rose-500',
        'bg-rose-400',
        'text-rose-100',
        'text-rose-900',

        'bg-fuchsia-300',
        'bg-fuchsia-400',
        'bg-fuchsia-500',
        'bg-fuchsia-600',
        'text-fuchsia-100',
        'text-fuchsia-900'
      ]
    }
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        ...colors
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
