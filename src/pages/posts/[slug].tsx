import { GetStaticPaths, GetStaticProps } from 'next'

import { Footer } from '@/components/Footer'
import { Post } from '@/components/Post'
import { getAllPaths, getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import type { Post as PostType } from '@/types/post'

type PostPagePros = {
  post: PostType
}

export default function PostPage({ post }: PostPagePros) {
  return (
    <>
      <Post post={post} />
      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPaths()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug as string
  const post = getPostBySlug(slug, true, locale as string)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}
