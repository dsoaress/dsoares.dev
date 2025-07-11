import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

import { Block } from './block'

export function Header(): React.JSX.Element {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <Image
        src="https://github.com/dsoaress.png"
        alt="avatar"
        className="mb-4 size-16 rounded-full object-cover object-top"
        width={64}
        height={64}
      />
      <h1 className="mb-12 text-4xl font-medium leading-tight">
        Hi, I&apos;m Daniel Soares.
        <br />
        <span className="text-zinc-400">I build cool things with Node and React.</span>
      </h1>
      <Link
        href="https://www.linkedin.com/in/dsoaress"
        target="_blank"
        rel="noopener noreferrer"
        data-umami-event="Clicked Get in touch"
        className="flex items-center gap-1 text-rose-300 hover:underline"
      >
        Get in touch <FiArrowRight />
      </Link>
    </Block>
  )
}
