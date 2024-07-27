import { FiMapPin } from 'react-icons/fi'

import { Block } from './block'

export function Location() {
  return (
    <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
      <FiMapPin className="text-3xl" />
      <p className="text-center text-lg text-neutral-400">Rio de Janeiro, BR</p>
    </Block>
  )
}
