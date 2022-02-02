import cn from 'classnames'
import type { HTMLAttributes } from 'react'

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <main className={cn('max-w-screen-xl px-6 mx-auto', className)} {...props} />
}
