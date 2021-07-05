import cn from 'classnames'
import { HTMLAttributes } from 'react'

export default function Text({ children, className }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('font-light leading-7', className)}>{children}</p>
}
