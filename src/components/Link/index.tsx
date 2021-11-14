import NextLink from 'next/link'
import { AnchorHTMLAttributes } from 'react'

import { StyledLink } from './styles'

export { CardLink, ScrollLink } from './styles'

export type LinkProps = {
  active?: boolean
  href: string
  locale?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export function Link({ active = false, href, locale, ...rest }: LinkProps) {
  return (
    <NextLink href={href} locale={locale} passHref>
      <StyledLink active={active} {...rest} />
    </NextLink>
  )
}
