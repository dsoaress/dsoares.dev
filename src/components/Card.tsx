import Image from 'next/image'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

import { Heading } from '@/components/Heading'
import { CardLink } from '@/components/Link'

type CardProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  image: string
  title: string
  href: string
}

export function Card({ children, image, title, href, ...props }: CardProps) {
  return (
    <div className="relative transition-all duration-300 border border-solid rounded-md border-neutral-800 hover:bg-neutral-800 hover:shadow-md">
      <CardLink href={href} aria-label={title} {...props} />

      <div className="relative hidden h-64 rounded-tl-md rounded-tr-md">
        <Image src={image} alt={title} objectFit="cover" layout="fill" />
      </div>

      <div className="grid gap-4 p-6">
        <Heading as="h3" size="lg">
          {title}
        </Heading>

        {children}
      </div>
    </div>
  )
}
