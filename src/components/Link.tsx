import cn from 'classnames'
import NextLink from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link as ReactScroll } from 'react-scroll'

type LinkProps = {
  active?: boolean
  href: string
  locale?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

type ScrollLinkProps = {
  to: string
  className?: string
  children: ReactNode
}

export function Link({ active = false, href, className, locale, ...props }: LinkProps) {
  return (
    <NextLink href={href} locale={locale}>
      <a className={cn(className, { 'text-primary-500': active })} {...props} />
    </NextLink>
  )
}

export function ScrollLink(props: ScrollLinkProps) {
  return <ReactScroll smooth={true} offset={-76} {...props} />
}

export function CardLink({ className, ...props }: LinkProps) {
  return <Link className={cn('absolute inset-0', className)} {...props} />
}
