import cn from 'classnames'
import NextLink from 'next/link'
import type { AnchorHTMLAttributes } from 'react'
import type { LinkProps as ReactScrollLinkProps } from 'react-scroll'
import { Link as ReactScroll } from 'react-scroll'

export type LinkProps = {
  active?: boolean
  href: string
  locale?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

const baseStyles =
  'z-10 font-medium no-underline transition-colors text-neutral-50 pointer hover:text-primary-500 active:text-primary-600'

export function Link({ active = false, href, className, locale, ...props }: LinkProps) {
  return (
    <NextLink href={href} locale={locale}>
      <a
        className={cn(baseStyles, className, {
          'text-primary-500': active
        })}
        {...props}
      />
    </NextLink>
  )
}

export function ScrollLink({ to }: ReactScrollLinkProps) {
  return <ReactScroll to={to} className={baseStyles} smooth={true} offset={-76} />
}

export function CardLink(props: LinkProps) {
  return <Link className="absolute inset-0" {...props} />
}
