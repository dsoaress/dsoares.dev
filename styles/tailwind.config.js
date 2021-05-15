const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: {
    content: ['./pages/**/*.js', './components/**/*.js'],
    options: {
      safelist: [
        'neutral',
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
        body: 'Lato, sans-serif',
        mono: 'Fira Code, monospace'
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.700'),
              textDecoration: 'none',
              fontWeight: '600',
              transitionProperty: 'color',
              transitionDuration: '300ms',
              '&:hover': {
                color: theme('colors.primary.500')
              }
            },
            img: {
              borderRadius: '0.5rem',
              margin: '0 auto'
            },
            figcaption: { textAlign: 'center' },
            code: {
              backgroundColor: theme('colors.neutral.300'),
              borderRadius: '0.25rem',
              padding: '0.3rem'
            },
            'code::before': { display: 'none' },
            'code::after': { display: 'none' },
            pre: {
              backgroundColor: theme('colors.neutral.900'),
              fontSize: '0.9rem',
              lineHeight: 1.5
            }
          }
        },
        xl: {
          css: {
            code: {
              fontSize: '0.9rem'
            },
            pre: {
              fontSize: '1rem',
              lineHeight: 1.5
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.neutral.300'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.300')
              }
            },
            strong: { color: theme('colors.neutral.100') },
            'ul > li::before': {
              backgroundColor: theme('colors.neutral.700')
            },
            hr: { borderColor: theme('colors.neutral.800') },
            blockquote: {
              color: theme('colors.neutral.100'),
              borderLeftColor: theme('colors.neutral.800')
            },
            h1: { color: theme('colors.neutral.100') },
            h2: { color: theme('colors.neutral.100') },
            h3: { color: theme('colors.neutral.100') },
            h4: { color: theme('colors.neutral.100') },
            code: {
              backgroundColor: theme('colors.neutral.800'),
              color: theme('colors.neutral.100')
            },
            'a code': { color: theme('colors.neutral.100') },
            pre: {
              color: theme('colors.neutral.200'),
              backgroundColor: theme('colors.neutral.800')
            },
            thead: {
              color: theme('colors.neutral.100'),
              borderBottomColor: theme('colors.neutral.700')
            },
            'tbody tr': { borderBottomColor: theme('colors.neutral.800') }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
