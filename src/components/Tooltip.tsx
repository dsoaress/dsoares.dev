import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

type TooltipProps = {
  children: ReactNode
  content: string
  side?: 'top' | 'bottom' | 'left' | 'right'
  asChild?: boolean
  delayDuration?: number
}

export function Tooltip({
  children,
  content,
  side = 'bottom',
  asChild = false,
  delayDuration = 100
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root delayDuration={delayDuration}>
      <TooltipPrimitive.Trigger asChild={asChild} className="cursor-auto">
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        side={side}
        sideOffset={8}
        className="inline-flex items-center rounded-md bg-neutral-800 px-4 py-2.5 radix-side-bottom:animate-slide-up-fade radix-side-left:animate-slide-right-fade radix-side-right:animate-slide-left-fade radix-side-top:animate-slide-down-fade dark:bg-neutral-50"
      >
        <TooltipPrimitive.Arrow className="fill-current text-neutral-800 dark:text-neutral-50" />
        <span className="block text-xs leading-none text-neutral-50 dark:text-neutral-900">
          {content}
        </span>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  )
}
