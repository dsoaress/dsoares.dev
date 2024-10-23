import type { Config } from 'tailwindcss'
import * as c from 'tailwindcss/colors'
import { fontFamily } from 'tailwindcss/defaultTheme'

const neutralPalette = [c.zinc, c.gray, c.slate, c.stone]
const primaryPalette = [
  c.rose,
  c.pink,
  c.fuchsia,
  c.purple,
  c.violet,
  c.indigo,
  c.cyan,
  c.teal,
  c.emerald,
  c.lime,
  c.amber,
  c.orange,
  c.red,
  c.blue,
  c.green,
  c.sky
]

function randomColor(
  palette: typeof neutralPalette | typeof primaryPalette
): (typeof neutralPalette)[number] | (typeof primaryPalette)[number] {
  return palette[Math.floor(Math.random() * palette.length)]
}

const config: Config = {
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
}

export default config
