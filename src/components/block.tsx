import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/cn'

type BlockProps = HTMLAttributes<HTMLDivElement>

export function Block({ className, ...props }: Readonly<BlockProps>): React.JSX.Element {
  return (
    <div
      className={cn('col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6', className)}
      {...props}
    />
  )
}
