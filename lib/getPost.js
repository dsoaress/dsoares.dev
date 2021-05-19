import { gql } from '@apollo/client'
import reading from 'reading-time'

import client from '@/lib/apolloClient'
import serializeMdx from '@/lib/serializeMdx'
import seoData from '@/seo'

const { API_URL } = process.env

export default async function getPost(locale, slug) {
  const { data } = await client.query({
    query: gql`
      query Post($locale: String, $slug: String) {
        posts(filter: { slug: { _eq: $slug } }) {
          date
          date_updated
          icon {
            id
          }
          tags {
            tags_name {
              name
              color
            }
          }
          translations(filter: { languages_code: { _eq: $locale } }) {
            title
            og_image {
              id
            }
            description
            body
          }
        }
      }
    `,
    variables: {
      locale,
      slug
    }
  })

  if (data.posts.length === 0) {
    return
  }

  const rawPost = data.posts[0]
  const {
    body: rawBody,
    description,
    og_image,
    title
  } = rawPost.translations[0]

  const body = await serializeMdx(rawBody)
  const icon = `${API_URL}/assets/${rawPost.icon?.id}`
  const ogImage = `${API_URL}/assets/${og_image?.id}`
  const readingTime = Math.round(reading(rawBody).minutes)
  const tagsList = rawPost.tags.map(t => t.tags_name.name).join(',')
  const url = `https://${seoData.siteUrl}${
    locale === 'en' ? '' : `/${locale}`
  }/${slug}`

  const post = {
    title,
    description,
    date: rawPost.date,
    dateUpdated: rawPost.date_updated,
    ogImage,
    icon,
    readingTime,
    slug,
    tags: rawPost.tags,
    tagsList,
    body,
    url
  }

  return post
}
