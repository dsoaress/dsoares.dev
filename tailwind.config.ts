import type { Config } from 'tailwindcss'
import {
  amber,
  blue,
  cyan,
  emerald,
  fuchsia,
  gray,
  green,
  indigo,
  lime,
  orange,
  pink,
  purple,
  red,
  rose,
  sky,
  slate,
  stone,
  teal,
  violet,
  zinc
} from 'tailwindcss/colors'
import { fontFamily } from 'tailwindcss/defaultTheme'

const neutralPalette = [zinc, gray, slate, stone]
const primaryPalette = [
  rose,
  pink,
  fuchsia,
  purple,
  violet,
  indigo,
  cyan,
  teal,
  emerald,
  lime,
  amber,
  orange,
  red,
  blue,
  green,
  sky
]

function randomColor(palette: typeof neutralPalette | typeof primaryPalette) {
  return palette[Math.floor(Math.random() * palette.length)]
}

const config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans]
      },
      colors: {
        neutral: randomColor(neutralPalette),
        primary: randomColor(primaryPalette)
      }
    }
  }
} satisfies Config

export default config
