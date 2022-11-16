import cn from 'classnames'
import type { LinkProps as NextLinkProps } from 'next/link'
import NextLink from 'next/link'
import type { ReactNode } from 'react'
import { Link as ReactScroll } from 'react-scroll'

type LinkProps = {
  active?: boolean
  className?: string
  external?: boolean
  children?: ReactNode
} & NextLinkProps

type ScrollLinkProps = {
  to: string
  className?: string
  children: ReactNode
}

export function Link({ active = false, className, external, ...props }: LinkProps) {
  return (
    <NextLink
      className={cn(className, { 'text-primary-300 dark:text-primary-300': active })}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
      {...props}
    />
  )
}

export function ScrollLink(props: ScrollLinkProps) {
  return <ReactScroll smooth={true} offset={-76} href="/" aria-hidden {...props} />
}

export function CardLink({ className, ...props }: LinkProps) {
  return <Link className={cn('absolute inset-0', className)} {...props} />
}
