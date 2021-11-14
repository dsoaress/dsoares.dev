import { styled, theme } from '@/styles/stitches.config'

export const Wrapper = styled('nav', {
  position: 'absolute',
  insetX: 0,
  zIndex: 10,
  paddingX: theme.space[16],
  paddingTop: theme.space[12],
  paddingBottom: theme.space[32],
  fontSize: theme.fontSizes.sm,
  background: `linear-gradient(to bottom, ${theme.colors.neutral900} 0%, transparent 100%)`
})

export const NavLinks = styled('ul', {
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',

  '@md': {
    justifyContent: 'flex-end'
  }
})

export const NavLinkItem = styled('li', {
  marginRight: theme.space[6]
})

export const LanguageSelector = styled('ul', {
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none'
})

export const LanguageItem = styled('li', {
  '&:not(:last-child)': {
    marginRight: theme.space[2]
  }
})
