import { AiOutlineArrowRight } from 'react-icons/ai'

import { Card } from '@/components/Card'
import { CardList } from '@/components/CardList'
import { Heading } from '@/components/Heading'
import { Section } from '@/components/Section'
import { Text } from '@/components/Text'
import { useData } from '@/hooks/useData'
import { PostType } from '@/types/post'

type PostsProps = {
  posts: PostType[]
}

export function Posts({ posts }: PostsProps) {
  const { d } = useData()

  return (
    <Section id="posts">
      <Heading as="h2" size="3xl" className="mb-6">
        {d.posts.title}
      </Heading>
      <Text faded size="xl">
        {d.posts.description}
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
                  {post.readingTime} {d.posts.readingTime}
                </Text>
                <span>
                  <Text faded size="sm" className="flex items-center">
                    {d.posts.readMore}
                    <AiOutlineArrowRight className="ml-2" />
                  </Text>
                </span>
              </footer>
            </Card>
          )
        })}
      </CardList>
    </Section>
  )
}
