import Image from 'next/image'

import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { PostType } from '@/types/post'

import { Article, Cover, Header, Overlay, Wrapper } from './styles'

type PostPros = {
  post: PostType
}

export function Post({ post }: PostPros) {
  return (
    <Wrapper>
      <Header>
        <Heading>{post.title}</Heading>
        <Cover>
          <Image
            src={post.cover}
            // blurDataURL={d.profile.avatar.placeholder}
            // placeholder="blur"
            alt={post.title}
            objectFit="cover"
            layout="fill"
            quality={100}
            priority
          />
          <Overlay />
        </Cover>
      </Header>
      <Container>
        {post.content && <Article dangerouslySetInnerHTML={{ __html: post.content }} />}
      </Container>
    </Wrapper>
  )
}
