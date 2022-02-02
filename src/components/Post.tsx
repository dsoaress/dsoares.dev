import Image from 'next/image'

import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import type { Post } from '@/types/post'

type PostPros = {
  post: Post
}

export function Post({ post }: PostPros) {
  return (
    <main>
      <header className="flex items-center justify-center w-full h-screen">
        <Heading>{post.title}</Heading>
        <div className="-z-10">
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
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
        </div>
      </header>
      <Container>
        {post.content && (
          <article className="mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
        )}
      </Container>
    </main>
  )
}
