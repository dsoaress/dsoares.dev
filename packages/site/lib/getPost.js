import { gql } from '@apollo/client'
import reading from 'reading-time'

import client from '@/lib/apolloClient'
import serializeMdx from '@/lib/serializeMdx'
import getOgImage from '@/lib/getOgImage'
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

  const rawPost = data.posts[0]
  const { body: rawBody, description, title } = rawPost.translations[0]

  const ogImage = await getOgImage(
    `?title=${title}&slug=${slug}&locale=${locale}`
  )

  const body = await serializeMdx(rawBody)
  const icon = `${API_URL}/assets/${rawPost.icon.id}`
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
