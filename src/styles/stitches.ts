import { createStitches } from '@stitches/react'

import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  transitions,
  utils
} from '@/styles/tokens'

export const { css, styled, keyframes, globalCss, getCssText } = createStitches({
  theme: {
    colors,
    fontSizes,
    fonts,
    lineHeights,
    fontWeights,
    radii,
    shadows,
    transitions
  },
  utils
})
