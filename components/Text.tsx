import { darken } from 'polished'
import styled, { css } from 'styled-components'

import { theme } from '@/styles/theme'

type TextProps = {
  faded?: boolean
  size?: keyof typeof theme.fontSizes
}

export const Text = styled.p<TextProps>`
  ${({ faded = false, size = 'md' }) => css`
    line-height: ${size === 'sm' ? 1 : 1.75};
    font-size: ${theme.fontSizes[size]};
    font-weight: 300;
    color: ${faded ? darken(0.3, theme.colors.text) : theme.colors.text};
  `}
`
