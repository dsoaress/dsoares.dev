import { styled, theme } from '@/styles/stitches.config'

export const Wrapper = styled('main', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Content = styled('div', {
  textAlign: 'center',

  p: {
    marginBottom: theme.space[4]
  }
})
