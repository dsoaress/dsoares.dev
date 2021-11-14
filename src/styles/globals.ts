import { globalCss, theme } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0
  },
  body: {
    fontFamily: theme.fonts.primary,
    fontSize: '16px',
    color: theme.colors.neutral50,
    backgroundColor: theme.colors.neutral900
  }
})
