import NextLink from 'next/link'
import { lighten } from 'polished'
import { AnchorHTMLAttributes } from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    color: ${({ theme }) => lighten(0.1, theme.colors.primary)};
  }
`

export function Link({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props} />
    </NextLink>
  )
}
