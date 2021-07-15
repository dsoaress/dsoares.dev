import { lighten } from 'polished'
import { Link as ReactScroll } from 'react-scroll'
import styled, { css } from 'styled-components'

import { Link, LinkProps } from '.'

export const BaseStyle = css`
  ${({ theme }) => css`
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: ${theme.colors.text};
    text-decoration: none;
    font-weight: 500;
    z-index: 10;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.primary};
    }

    &:active {
      color: ${lighten(0.1, theme.colors.primary)};
    }
  `}
`

export const StyledLink = styled.a<LinkProps>`
  ${BaseStyle}
  ${({ active = false, theme }) => css`
    color: ${active && theme.colors.primary};
  `}
`

export const ScrollLink = styled(ReactScroll)`
  ${BaseStyle}
`

export const CardLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
