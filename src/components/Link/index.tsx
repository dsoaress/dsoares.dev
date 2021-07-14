import NextLink from 'next/link'
import { AnchorHTMLAttributes } from 'react'

import { StyledLink } from './styles'

export { CardLink, ScrollLink } from './styles'

export type LinkProps = {
  active?: boolean
  locale?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export function Link({ href, locale, ...props }: LinkProps) {
  return (
    <NextLink href={href} locale={locale} passHref>
      <StyledLink {...props} />
    </NextLink>
  )
}