import type { HTMLAttributes } from 'react'

export function CardList(props: HTMLAttributes<HTMLDivElement>) {
  return <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3" {...props} />
}
