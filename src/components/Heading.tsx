import cn from 'classnames'
import type { HTMLAttributes } from 'react'

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
} & HTMLAttributes<HTMLHeadingElement>

export function Heading({ as: Tag = 'h1', className, size = '5xl', ...props }: HeadingProps) {
  return (
    <Tag
      className={cn('font-bold leading-4 text-neutral-50 m-0', className, {
        'text-xs': size === 'xs',
        'text-sm leading-5': size === 'sm',
        'text-base leading-6': size === 'md',
        'text-lg leading-7': size === 'lg',
        'text-xl leading-8': size === 'xl',
        'text-2xl leading-9': size === '2xl',
        'text-3xl leading-10': size === '3xl',
        'text-4xl': size === '4xl',
        'text-5xl': size === '5xl'
      })}
      {...props}
    />
  )
}
