import Image from 'next/image'
import { useRouter } from 'next/router'
import { darken, lighten } from 'polished'
import { AiOutlineArrowRight } from 'react-icons/ai'
import styled from 'styled-components'

import { Heading } from '@/components/Heading'
import { CardLink } from '@/components/Link'
import { Text } from '@/components/Text'
import i18nData from '@/content/i18n.json'
import { formatDate } from '@/lib/formatDate'
import { Post } from '@/types/post'

const Wrapper = styled.div`
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid ${({ theme }) => lighten(0.05, theme.colors.background)};
  border-radius: 0.35rem;

  &:hover {
    background: ${({ theme }) => lighten(0.04, theme.colors.background)};
    box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.05);
  }
`

const ImageCover = styled.div`
  position: relative;
  height: 260px;
  border-radius: 0.35rem 0.35rem 0 0;
  overflow: hidden;
`

const Content = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xl};
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;

  span {
    p {
      display: flex;
      align-items: center;
    }

    svg {
      margin-left: ${({ theme }) => theme.spacing.xs};
    }
  }
`

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
