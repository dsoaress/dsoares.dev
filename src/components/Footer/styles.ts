import { styled, theme } from '@/styles/stitches.config'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginY: theme.space[12],

  p: {
    textAlign: 'center',
    marginTop: theme.space[6]
  }
})
