import { styled, theme } from '@/styles/stitches.config'

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  paddingX: theme.space[6],
  fontSize: theme.fontSizes.sm,
  lineHeight: theme.lineHeights.sm,
  fontWeight: theme.fontWeights.medium,
  border: theme.borderWidth[0],
  borderRadius: theme.radii.md,
  cursor: 'pointer',
  height: theme.sizes[11],
  background: theme.colors.primary600,
  color: theme.colors.neutral50,
  transition: 'background-color 0.3s ease-in-out',

  '&:hover': {
    background: theme.colors.primary700
  },

  '&:active': {
    background: theme.colors.primary800
  },

  svg: {
    fontSize: theme.fontSizes.lg,
    marginRight: theme.space[2]
  }
})
