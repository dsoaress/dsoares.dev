import { globalCss, theme } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  body: {
    fontFamily: theme.fonts.primary,
    fontSize: '16px',
    fontWeight: theme.fontWeights.light,
    color: theme.colors.neutral50,
    backgroundColor: theme.colors.neutral900
  }
})
