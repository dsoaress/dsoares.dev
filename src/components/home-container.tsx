import type { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export function HomeContainer(props: Readonly<Props>): React.JSX.Element {
  return <div className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4" {...props} />
}
