import cn from 'classnames'
import type { HTMLAttributes, ReactNode } from 'react'

export function Section({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <section className={cn('my-20', className)} {...props} />
}
