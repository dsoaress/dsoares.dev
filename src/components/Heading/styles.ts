import { styled, theme } from '@/styles/stitches.config'
import { variants } from '@/styles/variants'

export const Heading = styled('h1', {
  fontWeight: theme.fontWeights.bold,
  fontSize: theme.fontSizes['5xl'],
  color: theme.colors.neutral50,
  margin: 0,

  variants: {
    size: variants.size,
    mb: variants.mb
  }
})
