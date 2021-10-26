import { GetStaticPaths, GetStaticProps } from 'next'

import { Post } from '@/components/Post'
import { getPaths } from '@/queries/getPaths'
import { getSinglePost } from '@/queries/getSinglePost'
import { initialdata } from '@/services/initialdata'
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

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    },
    revalidate: 1
  }
}
