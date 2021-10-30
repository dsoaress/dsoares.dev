import { GetStaticPropsContext } from 'next'

import { formatDate } from '@/lib/formatDate'
import { gql } from '@/lib/gql'
import { formatLocale } from '@/lib/localeUtils'
import { getReadingTime, getSerializedContent } from '@/lib/postUtils'
import { prismic } from '@/services/prismic'
import { PostResponse } from '@/types/post'

export async function getSinglePost({ params, locale }: GetStaticPropsContext) {
  if (!params?.uid) throw new Error('slug is not defined')
  const formattedLocale = formatLocale(locale)

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
        lang: formattedLocale,
        uid: params.uid as string
      }
    }
  )

  if (!data.post) return console.log('post not found')

  return {
    id: data.post._meta.id,
    title: data.post.title,
    description: data.post.description,
    slug: data.post._meta.uid,
    cover: data.post.cover.url,
    date: formatDate(data.post.date, formattedLocale),
    readingTime: getReadingTime(data.post.content),
    content: getSerializedContent(data.post.content)
  }
}
