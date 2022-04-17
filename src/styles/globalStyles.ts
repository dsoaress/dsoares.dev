import { globalCss } from './stitches'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    fontFamily: '$sans',
    fontSize: '$base',
    fontWeight: '$light',
    lineHeight: '$normal',
    color: '$neutral1',
    backgroundColor: '$neutral12'
  },

  a: {
    zIndex: 10,
    color: '$neutral1',
    fontWeight: '$medium',
    textDecoration: 'none',
    transition: '$colors',
    cursor: 'pointer',

    '&:hover': {
      color: '$accent8'
    },

    '&:active': {
      color: '$accent8'
    }
  }
})
