import NextLink from 'next/link'
import { lighten } from 'polished'
import { AnchorHTMLAttributes } from 'react'
import styled from 'styled-components'

export const StyledLink = styled.a`
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => lighten(0.3, theme.colors.primary)};
  }

  &:active {
    color: ${({ theme }) => theme.colors.text};
  }
`

export default function Link({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props} />
    </NextLink>
  )
}
