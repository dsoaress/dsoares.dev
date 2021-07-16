import Image from 'next/image'
import { ReactNode } from 'react'

import { Heading } from '@/components/Heading'
import { CardLink } from '@/components/Link'

import { Container, ImageCover, Wrapper } from './styles'

type CardProps = {
  children: ReactNode
  image: string
  title: string
  type: 'post' | 'project'
  url: string
}

export function Card({ children, image, title, type, url }: CardProps) {
  return (
    <Wrapper>
      <CardLink
        href={url}
        aria-label={title}
        rel="noopener noreferrer"
        target="_blank"
        className={`umami--click--${type}-${title}`}
      />

      <ImageCover>
        <Image src={image} alt={title} objectFit="cover" layout="fill" />
      </ImageCover>

      <Container>
        <Heading level={3} size="md">
          {title}
        </Heading>

        {children}
      </Container>
    </Wrapper>
  )
}
