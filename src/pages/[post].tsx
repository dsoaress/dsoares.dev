import 'twin.macro'

import { GetStaticPaths, GetStaticProps } from 'next'

import { Post } from '@/components/Post'
import { initialdata } from '@/services/initialdata'
import { getPaths, getSinglePost } from '@/services/queries'
import { PostType } from '@/types/post'

type PostPagePros = {
  post: PostType
}

export default function PostPage({ post }: PostPagePros) {
  return <Post post={post} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPaths()

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  await initialdata()

  const post = await getSinglePost(ctx)

  return {
    props: {
      post
    },
    revalidate: 1
  }
}
