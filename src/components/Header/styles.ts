import { styled, theme } from '@/styles/stitches.config'

export const Wrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  width: theme.sizes.full,
  height: theme.sizes.screenY,
  paddingBottom: theme.space[24]
})

export const Content = styled('div', {
  display: 'grid',
  gap: theme.space[8],
  passingX: theme.space[8],
  textAlign: 'center',
  zIndex: 10,

  svg: {
    marginX: theme.space.auto
  }
})

export const Resume = styled('nav', {
  display: 'flex',
  justifyContent: 'center'
})

export const Avatar = styled('div', {
  position: 'relative',
  height: theme.sizes.screenY
})

export const Overlay = styled('div', {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  background: `linear-gradient(to top, ${theme.colors.neutral900} 0%, transparent 100%)`
})
