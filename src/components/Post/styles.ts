import { styled, theme } from '@/styles/stitches.config'

export const Wrapper = styled('main')

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: theme.sizes.full,
  height: theme.sizes.screenY
})

export const Cover = styled('div', {
  zIndex: -10
})

export const Overlay = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(to top, ${theme.colors.neutral900} 0%, transparent 100%)`
})

export const Article = styled('article', {
  marginX: 'auto'
})
