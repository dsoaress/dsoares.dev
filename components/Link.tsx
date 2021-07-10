import NextLink from 'next/link'
import { lighten } from 'polished'
import { AnchorHTMLAttributes } from 'react'
import { Link as ReactScroll } from 'react-scroll'
import styled, { css } from 'styled-components'

type LinkProps = {
  active?: boolean
  locale?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

const BaseStyle = css`
  ${({ theme }) => css`
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: ${theme.colors.text};
    text-decoration: none;
    font-weight: 600;
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

const StyledLink = styled.a<LinkProps>`
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

export function Link({ href, locale, ...props }: LinkProps) {
  return (
    <NextLink href={href} locale={locale} passHref>
      <StyledLink {...props} />
    </NextLink>
  )
}
