import type { JSX } from 'react'

import { Block } from './block'

export function About(): JSX.Element {
  return (
    <Block className="col-span-12 text-3xl leading-snug">
      <p className="text-slate-400">
        Specializing in <span className="text-slate-50">scalable, robust applications</span>, I
        focus on delivering seamless user experiences and optimizing backend systems for maximum
        efficiency.
      </p>
    </Block>
  )
}
