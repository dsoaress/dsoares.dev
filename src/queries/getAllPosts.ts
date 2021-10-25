import { GetStaticPropsContext } from 'next'
import { RichText } from 'prismic-dom'
import readingTime from 'reading-time'

import { formatDate } from '@/lib/formatDate'
import { gql } from '@/lib/gql'
import { prismic } from '@/services/prismic'
import { PostsResponse } from '@/types/post'

export async function getAllPosts({ locale }: GetStaticPropsContext) {
  if (!locale) throw new Error('locale is not defined')

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
        lang: locale
      }
    }
  )

  return data.allPosts.edges.map(({ node }) => {
    const content = RichText.asHtml(node.content)

    return {
      id: node._meta.id,
      title: node.title,
      description: node.description,
      slug: node._meta.uid,
      cover: node.cover.url,
      date: formatDate(node.date, locale),
      readingTime: Math.floor(readingTime(content).minutes)
    }
  })
}
