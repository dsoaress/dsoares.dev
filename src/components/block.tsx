import type { HTMLAttributes, JSX } from 'react'

import { cn } from '@/lib/cn'

type BlockProps = HTMLAttributes<HTMLDivElement>

export function Block({ className, ...props }: Readonly<BlockProps>): JSX.Element {
  return (
    <div
      className={cn(
        'col-span-4 rounded-lg border border-neutral-700 bg-neutral-800 p-6',
        className
      )}
      {...props}
    />
  )
}
