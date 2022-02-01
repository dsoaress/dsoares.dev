import cn from 'classnames'
import type { ButtonHTMLAttributes } from 'react'

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'flex items-center px-6 text-sm font-medium leading-none transition-colors duration-300 border-0 rounded-md cursor-pointer h-11 bg-primary-600 text-neutral-50 hover:bg-primary-700 active:bg-primary-800',
        className
      )}
      {...props}
    />
  )
}
