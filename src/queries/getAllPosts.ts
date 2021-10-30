import { GetStaticPropsContext } from 'next'

import { formatDate } from '@/lib/formatDate'
import { gql } from '@/lib/gql'
import { formatLocale } from '@/lib/localeUtils'
import { getReadingTime } from '@/lib/postUtils'
import { prismic } from '@/services/prismic'
import { PostsResponse } from '@/types/post'

export async function getAllPosts({ locale }: GetStaticPropsContext) {
  const formattedLocale = formatLocale(locale)

  const data = await prismic<PostsResponse>(
    gql`
      query ($lang: String!) {
        allPosts(lang: $lang) {
          edges {
            node {
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
        }
      }
    `,
    {
      variables: {
        lang: formattedLocale
      }
    }
  )

  return data.allPosts.edges.map(({ node }) => {
    return {
      id: node._meta.id,
      title: node.title,
      description: node.description,
      slug: node._meta.uid,
      cover: node.cover.url,
      date: formatDate(node.date, formattedLocale),
      readingTime: getReadingTime(node.content)
    }
  })
}
