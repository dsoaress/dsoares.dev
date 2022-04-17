import { css } from '@/styles/stitches'

export const sharedTypographyProps = css({
  fontFamily: '$sans',
  fontSize: '$base',
  fontWeight: '$light',
  lineHeight: '$normal',
  color: '$neutral1',
  textAlign: 'left',
  m: 0
})

export const sharedTypographyVariants = css({
  variants: {
    size: {
      xs: { true: { fontSize: '$xs', lineHeight: '$none' } },
      sm: { true: { fontSize: '$sm', lineHeight: '$tight' } },
      md: { true: { fontSize: '$base', lineHeight: '$normal' } },
      lg: { true: { fontSize: '$lg', lineHeight: '$relaxed' } },
      xl: { true: { fontSize: '$xl', lineHeight: '$relaxed' } },
      '2xl': { true: { fontSize: '$2xl', lineHeight: '$loose' } },
      '3xl': { true: { fontSize: '$3xl', lineHeight: '$loose' } },
      '4xl': { true: { fontSize: '$4xl', lineHeight: '$none' } },
      '5xl': { true: { fontSize: '$5xl', lineHeight: '$none' } }
    },

    lineHeight: {
      none: { true: { lineHeight: '$none !important' } },
      tight: { true: { lineHeight: '$tight !important' } },
      snug: { true: { lineHeight: '$snug !important' } },
      normal: { true: { lineHeight: '$normal !important' } },
      relaxed: { true: { lineHeight: '$relaxed !important' } },
      loose: { true: { lineHeight: '$loose !important' } }
    },

    faded: {
      true: { color: '$neutral8' }
    },

    center: {
      true: { textAlign: 'center' }
    }
  }
})
