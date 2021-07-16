import styled, { css } from 'styled-components'

import { theme } from '@/styles/theme'

type HeadingProps = {
  level?: 1 | 2 | 3
  margin?: keyof typeof theme.spacing
  size?: keyof typeof theme.fontSizes
}

export const Heading = styled('h1').attrs<HeadingProps>(({ level = 1 }) => ({
  as: `h${level}`
}))<HeadingProps>`
  ${({ size = 'xxl', margin }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes[size]};
    font-weight: 600;
    margin: 0 0 ${margin ? theme.spacing[margin] : 0};
  `}
`
