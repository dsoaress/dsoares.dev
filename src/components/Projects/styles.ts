import { styled, theme } from '@/styles/stitches.config'

export const Footer = styled('footer', {
  display: 'flex',
  alignSelf: 'flex-end',
  justifyContent: 'space-between',

  span: {
    p: {
      display: 'flex',
      alignItems: 'center'
    },

    svg: {
      marginRight: theme.space[1]
    }
  }
})
