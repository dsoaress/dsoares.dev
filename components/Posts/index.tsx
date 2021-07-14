import { Post } from '@/types/post'

import { Heading } from '../Heading'
import { PostCard } from '../PostCard'
import { PostsList, Wrapper } from './styles'

type PostsProps = {
  posts: Post[]
}

export function Posts({ posts }: PostsProps) {
  return (
    <Wrapper id="posts">
      <Heading level={2} size="lg" margin="xl">
        Posts
      </Heading>

      <PostsList>
        {posts?.map(post => {
          return <PostCard key={post.id} post={post} />
        })}
      </PostsList>
    </Wrapper>
  )
}
