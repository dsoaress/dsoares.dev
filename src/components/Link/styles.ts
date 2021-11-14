import { Link as ReactScroll } from 'react-scroll'

import { css, styled, theme } from '@/styles/stitches.config'

import { Link } from '.'

const BaseStyle = css({
  color: theme.colors.neutral50,
  fontWeight: theme.fontWeights.medium,
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  cursor: 'pointer',
  zIndex: 10,

  '&:hover': {
    color: theme.colors.primary500
  },

  '&:active': {
    color: theme.colors.primary600
  }
})

export const StyledLink = styled('a', BaseStyle, {
  variants: {
    active: {
      true: {
        color: theme.colors.primary500
      }
    }
  }
})

export const ScrollLink = styled(ReactScroll, BaseStyle)

export const CardLink = styled(Link, {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
})
