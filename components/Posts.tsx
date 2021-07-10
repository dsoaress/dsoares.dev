import styled from 'styled-components'
import media from 'styled-media-query'

import { Post } from '@/types/post'

import { Heading } from './Heading'
import { PostCard } from './PostCard'

const Wrapper = styled.div`
  margin: 76px 0;
`

const PostsList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  `}

  ${media.greaterThan('large')`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`

export function Posts({ posts }: { posts: Post[] }) {
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
