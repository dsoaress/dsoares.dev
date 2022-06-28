import cn from 'classnames'
import type { ButtonHTMLAttributes } from 'react'
import type { IconType } from 'react-icons/lib'

type ButtonProps = {
  icon?: IconType
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className, children, icon: Icon, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'flex h-11 cursor-pointer items-center rounded-md border-0 bg-primary-600 px-6 text-sm font-medium leading-none text-neutral-50 transition-colors duration-300 hover:bg-primary-700 active:bg-primary-800',
        className
      )}
      {...props}
    >
      {!!Icon && <Icon className="mr-2 text-lg" />}
      {children}
    </button>
  )
}
