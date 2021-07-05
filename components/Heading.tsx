import cn from 'classnames'
import { HTMLAttributes } from 'react'

export default function Text({ children, className }: HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className={cn('text-5xl font-black', className)}>{children}</h1>
}
