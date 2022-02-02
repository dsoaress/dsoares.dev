import { AiOutlineArrowRight } from 'react-icons/ai'

import { Card } from '@/components/Card'
import { CardList } from '@/components/CardList'
import { Heading } from '@/components/Heading'
import { Section } from '@/components/Section'
import { Text } from '@/components/Text'
import { useData } from '@/hooks/useData'

type Post = {
  id: string
  slug: string
  title: string
  description: string
  cover: string
  date: string
  readingTime: number
  content?: string
}

type PostsProps = {
  posts: Post[]
}

export function Posts({ posts }: PostsProps) {
  const { c, t } = useData()

  return c.parameters.showPosts ? (
    <Section id="posts">
      <Heading as="h2" size="3xl" className="mb-6">
        {t.posts.title}
      </Heading>
      <Text faded size="xl">
        {t.posts.description}
      </Text>

      <CardList>
        {posts?.map(post => {
          return (
            <Card key={post.id} image={post.cover} title={post.title} href={`/posts/${post.slug}`}>
              <Text faded size="sm">
                {post.date}
              </Text>
              <Text>{post.description}</Text>
              <footer className="flex items-end justify-between">
                <Text faded size="sm">
                  {post.readingTime} {t.posts.readingTime(post.readingTime)}
                </Text>
                <span>
                  <Text faded size="sm" className="flex items-center">
                    {t.posts.readMore}
                    <AiOutlineArrowRight className="ml-2" />
                  </Text>
                </span>
              </footer>
            </Card>
          )
        })}
      </CardList>
    </Section>
  ) : null
}
