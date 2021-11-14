import { createStitches } from '@stitches/react'

import { colors } from './colors'
import { fonts, fontSizes, fontWeights, lineHeights } from './fonts'
import { media } from './media'
import { radii } from './radii'
import { shadows } from './shadows'
import { sizes } from './sizes'
import { space } from './space'
import { utils } from './utils'

export const { css, styled, globalCss, theme, keyframes, getCssText } = createStitches({
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    shadows,
    sizes,
    space
  },
  media,
  utils
})
