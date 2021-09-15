import { GetStaticPaths, GetStaticProps } from 'next'

import { getPaths, getSinglePost } from '@/services/queries'
import { PostType } from '@/types/post'

type PostPagePros = {
  post: PostType
}

export default function PostPage({ post }: PostPagePros) {
  return <h1>{post.title}</h1>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPaths()

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const post = await getSinglePost(ctx)

  return {
    props: {
      post
    },
    revalidate: 1
  }
}
