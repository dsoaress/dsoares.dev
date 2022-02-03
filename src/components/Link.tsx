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

export function Link({ active = false, href, className, locale, ...props }: LinkProps) {
  return (
    <NextLink href={href} locale={locale}>
      <a
        className={cn(className, {
          'text-primary-500': active
        })}
        {...props}
      />
    </NextLink>
  )
}

export function ScrollLink({ to, children }: ReactScrollLinkProps) {
  return (
    <ReactScroll to={to} smooth={true} offset={-76}>
      {children}
    </ReactScroll>
  )
}

export function CardLink({ className, ...props }: LinkProps) {
  return <Link className={cn('absolute inset-0', className)} {...props} />
}
