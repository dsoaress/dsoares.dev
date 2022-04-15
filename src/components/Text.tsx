import cn from 'classnames'
import type { HTMLAttributes } from 'react'

type TextProps = {
  as?: 'p' | 'span'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
  faded?: boolean
} & HTMLAttributes<HTMLParagraphElement>

export function Text({
  as: Tag = 'p',
  size = 'md',
  faded = false,
  className,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cn('font-normal text-neutral-50', className, {
        'text-neutral-400': faded,
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
