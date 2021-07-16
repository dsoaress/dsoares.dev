import { AiOutlineArrowRight } from 'react-icons/ai'

import { Card } from '@/components/Card'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { useTranslation } from '@/hooks/useTranslation'
import { formatDate } from '@/lib/formatDate'

import { Footer, PostsList, Wrapper } from './styles'

export type PostType = {
  id: number
  title: string
  description: string
  url: string
  coverImage: string
  publishedAt: string
  readingTimeMinutes: number
  organization: {
    username: string
  }
}

type PostsProps = {
  posts: PostType[] | undefined
}

export function Posts({ posts }: PostsProps) {
  const { locale, t } = useTranslation()

  return (
    <Wrapper id="posts">
      <Heading level={2} size="xl" margin="xl">
        {t.posts.title}
      </Heading>
      <Text faded size="lg">
        {t.posts.description}
      </Text>

      <PostsList>
        {posts?.map(post => {
          return (
            <Card
              key={post.id}
              image={post.coverImage}
              title={post.title}
              type="post"
              url={post.url}
            >
              <Text faded size="sm">
                {formatDate(post.publishedAt, locale)}
              </Text>
              <Text>{post.description}</Text>
              <Footer>
                <Text faded size="sm">
                  {post.readingTimeMinutes} {t.posts.readingTime}
                </Text>
                <span>
                  <Text faded size="sm">
                    {t.posts.readMore}
                    <AiOutlineArrowRight />
                  </Text>
                </span>
              </Footer>
            </Card>
          )
        })}
      </PostsList>
    </Wrapper>
  )
}
