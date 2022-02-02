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
      <header className="flex h-screen w-full items-center justify-center">
        <Heading>{post.title}</Heading>
        <div className="-z-10">
          <Image
            src={post.cover}
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
          <article
            className="prose prose-invert mx-auto -mt-44 lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}
      </Container>
    </main>
  )
}
