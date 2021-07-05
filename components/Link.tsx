import cn from 'classnames'
import NextLink from 'next/link'
import { AnchorHTMLAttributes } from 'react'

export default function Link({
  className,
  children,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <NextLink href={href}>
      <a
        className={cn(
          'transition-colors duration-300 text-primary-500 hover:text-neutral-300',
          className
        )}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  )
}
