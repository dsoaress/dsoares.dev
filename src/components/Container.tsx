import cn from 'classnames'
import type { HTMLAttributes } from 'react'

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <main className={cn('mx-auto max-w-screen-xl px-6', className)} {...props} />
}
