import Image from 'next/image'
import { useRouter } from 'next/router'
import { AiOutlineArrowRight } from 'react-icons/ai'

import { Heading } from '@/components/Heading'
import { CardLink } from '@/components/Link'
import { Text } from '@/components/Text'
import i18nData from '@/content/i18n.json'
import { formatDate } from '@/lib/formatDate'
import { Post } from '@/types/post'

import { Content, Footer, ImageCover, Wrapper } from './styles'

export function PostCard({ post }: { post: Post }) {
  const { locale } = useRouter()
  const readingTime = i18nData.posts.readingTime[locale] as string
  const readMore = i18nData.posts.readMore[locale] as string

  return (
    <Wrapper>
      <CardLink
        href={post.url}
        aria-label={post.title}
        rel="noopener noreferrer"
        target="_blank"
        className={`umami--click--post-${post.url}`}
      />
      <ImageCover>
        <Image src={post.coverImage} alt={post.title} objectFit="cover" layout="fill" />
      </ImageCover>
      <Content>
        <Heading level={3} size="md">
          {post.title}
        </Heading>
        <Text>{formatDate(post.publishedAt)[locale]}</Text>
        <Text>{post.description}</Text>
        <Footer>
          <Text faded size="sm">
            {post.readingTimeMinutes} {readingTime}
          </Text>
          <span>
            <Text faded size="sm">
              {readMore}
              <AiOutlineArrowRight />
            </Text>
          </span>
        </Footer>
      </Content>
    </Wrapper>
  )
}
