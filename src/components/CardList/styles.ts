import { styled, theme } from '@/styles/stitches.config'

export const CardList = styled('div', {
  display: 'grid',
  gap: theme.space[8],
  marginTop: theme.sizes[8],

  '@md': {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: theme.space[6]
  },

  '@lg': {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
  }
})
