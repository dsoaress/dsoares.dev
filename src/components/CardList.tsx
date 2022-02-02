import type { HTMLAttributes } from 'react'

export function CardList(props: HTMLAttributes<HTMLDivElement>) {
  return <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3" {...props} />
}
