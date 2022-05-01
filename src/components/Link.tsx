import cn from 'classnames'
import NextLink from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link as ReactScroll } from 'react-scroll'

type LinkProps = {
  active?: boolean
  href: string
  locale?: string
  external?: boolean
} & AnchorHTMLAttributes<HTMLAnchorElement>

type ScrollLinkProps = {
  to: string
  className?: string
  children: ReactNode
}

export function Link({ active = false, href, className, locale, external, ...props }: LinkProps) {
  return (
    <NextLink href={href} locale={locale}>
      <a
        className={cn(className, { 'text-primary-500 dark:text-primary-500': active })}
        rel={external ? 'noopener noreferrer' : undefined}
        target={external ? '_blank' : undefined}
        {...props}
      />
    </NextLink>
  )
}

export function ScrollLink(props: ScrollLinkProps) {
  // TODO fix this
  // @ts-ignore
  return <ReactScroll smooth={true} offset={-76} href="/" aria-hidden {...props} />
}

export function CardLink({ className, ...props }: LinkProps) {
  return <Link className={cn('absolute inset-0', className)} {...props} />
}
