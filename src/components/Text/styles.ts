import { styled, theme } from '@/styles/stitches.config'
import { variants } from '@/styles/variants'

export const Text = styled('p', {
  fontSize: theme.fontSizes.md,
  lineHeight: theme.lineHeights.md,
  fontWeight: theme.fontWeights.light,

  variants: {
    style: {
      faded: {
        color: theme.colors.neutral500
      }
    },

    size: variants.size
  }
})
