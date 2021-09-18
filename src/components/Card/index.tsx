import Image from 'next/image'
import { AnchorHTMLAttributes, ReactNode } from 'react'

import { Heading } from '@/components/Heading'
import { CardLink } from '@/components/Link'

import { Container, ImageCover, Wrapper } from './styles'

interface CardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  image: string
  title: string
  href: string
}

export function Card({ children, image, title, href, ...rest }: CardProps) {
  return (
    <Wrapper>
      <CardLink href={href} aria-label={title} {...rest} />

      <ImageCover>
        <Image src={image} alt={title} objectFit="cover" layout="fill" />
      </ImageCover>

      <Container>
        <Heading as="h3" size="lg">
          {title}
        </Heading>

        {children}
      </Container>
    </Wrapper>
  )
}
