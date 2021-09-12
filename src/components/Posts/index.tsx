import { AiOutlineArrowRight } from 'react-icons/ai'

import { Card } from '@/components/Card'
import { CardList } from '@/components/CardList'
import { Heading } from '@/components/Heading'
import { Section } from '@/components/Section'
import { Text } from '@/components/Text'
import { useTranslation } from '@/hooks/useTranslation'
import { PostType } from '@/types/post'

import { Footer } from './styles'

type PostsProps = {
  posts: PostType[]
}

export function Posts({ posts }: PostsProps) {
  const { t } = useTranslation()

  return (
    <Section id="posts">
      <Heading as="h2" size="3xl" margin={6}>
        {t.posts.title}
      </Heading>
      <Text faded size="xl">
        {t.posts.description}
      </Text>

      <CardList>
        {posts?.map(post => {
          return (
            <Card
              key={post.id}
              image={post.cover}
              title={post.title}
              type="post"
              url={`/posts/${post.slug}`}
            >
              <Text faded size="sm">
                {post.date}
              </Text>
              <Text>{post.description}</Text>
              <Footer>
                <Text faded size="sm">
                  {post.readingTime} {t.posts.readingTime}
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
      </CardList>
    </Section>
  )
}
