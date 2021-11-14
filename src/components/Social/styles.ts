import { styled, theme } from '@/styles/stitches.config'

export const Wrapper = styled('div', {
  marginX: 'auto'
})

export const Content = styled('ul', {
  display: 'inline-flex',
  listStyle: 'none'
})

export const SocialItem = styled('li', {
  marginX: theme.space[4],
  transition: 'transform 0.2s ease-in-out',

  '&:hover': {
    transform: 'scale(1.1)'
  },

  '&:active': {
    transform: 'scale(0.95)'
  },

  a: {
    color: theme.colors.neutral50
  }
})
