import { useTranslation } from '@/hooks/useTranslation'
import { Post } from '@/types/post'

import { Heading } from '../Heading'
import { PostCard } from '../PostCard'
import { PostsList, Wrapper } from './styles'

type PostsProps = {
  posts: Post[] | undefined
}

export function Posts({ posts }: PostsProps) {
  const { t } = useTranslation()

  return (
    <Wrapper id="posts">
      <Heading level={2} size="lg" margin="xl">
        {t.posts.title}
      </Heading>

      <PostsList>
        {posts?.map(post => {
          return <PostCard key={post.id} post={post} />
        })}
      </PostsList>
    </Wrapper>
  )
}
