import { Arrow, Content, Provider, Root, Trigger } from '@radix-ui/react-tooltip'
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
    <Root delayDuration={delayDuration}>
      <Trigger asChild={asChild} className="cursor-auto">
        {children}
      </Trigger>
      <Content
        side={side}
        sideOffset={8}
        className="inline-flex items-center rounded-md bg-neutral-800 px-4 py-2.5 radix-side-top:animate-slide-down-fade radix-side-bottom:animate-slide-up-fade radix-side-left:animate-slide-right-fade radix-side-right:animate-slide-left-fade dark:bg-neutral-50"
      >
        <Arrow className="fill-current text-neutral-800 dark:text-neutral-50" />
        <span className="block text-xs leading-none text-neutral-50 dark:text-neutral-900">
          {content}
        </span>
      </Content>
    </Root>
  )
}

export { Provider as TooltipProvider }
