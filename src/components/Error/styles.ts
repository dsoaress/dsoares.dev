import { styled, theme } from '@/styles/stitches.config'

export const Wrapper = styled('main', {
  position: 'fixed',
  inset: 0,
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
