import { GetStaticPropsContext } from 'next'
import { RichText } from 'prismic-dom'
import readingTime from 'reading-time'

import { formatDate } from '@/lib/formatDate'
import { gql } from '@/lib/gql'
import { prismic } from '@/services/prismic'
import { PostResponse } from '@/types/post'

export async function getSinglePost({ params, locale }: GetStaticPropsContext) {
  if (!params?.post) throw new Error('slug is not defined')
  if (!locale) throw new Error('locale is not defined')

  const data = await prismic<PostResponse>(
    gql`
      query ($lang: String!, $uid: String!) {
        post(uid: $uid, lang: $lang) {
          _meta {
            id
            uid
          }
          title
          description
          cover
          date
          content
        }
      }
    `,
    {
      variables: {
        lang: locale,
        uid: params.post as string
      }
    }
  )

  const content = RichText.asHtml(data.post.content)

  return {
    id: data.post._meta.id,
    title: data.post.title,
    description: data.post.description,
    slug: data.post._meta.uid,
    cover: data.post.cover.url,
    date: formatDate(data.post.date, locale),
    readingTime: Math.floor(readingTime(content).minutes),
    content
  }
}
