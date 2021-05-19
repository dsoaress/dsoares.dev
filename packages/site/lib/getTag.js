import { gql } from '@apollo/client'

import client from '@/lib/apolloClient'

const { API_URL } = process.env

export default async function getTag(locale, name) {
  const {
    data: { tags_by_id: rawTag }
  } = await client.query({
    query: gql`
      query Tag($locale: String, $name: ID!) {
        tags_by_id(id: $name) {
          name
          color
          translations(filter: { languages_code: { _eq: $locale } }) {
            description
          }
          posts {
            posts_id {
              id
              date
              date_updated
              icon {
                id
              }
              slug
              tags {
                tags_name {
                  color
                  name
                }
              }
              translations(filter: { languages_code: { _eq: $locale } }) {
                description
                title
              }
            }
          }
        }
      }
    `,
    variables: {
      locale,
      name
    }
  })

  if (!rawTag) {
    return
  }

  const posts = rawTag.posts
    .map(rawPost => {
      if (!rawPost.posts_id) {
        return null
      }

      const { description, title } = rawPost.posts_id.translations[0]
      const icon = `${API_URL}/assets/${rawPost.posts_id.icon.id}`

      const post = {
        id: rawPost.posts_id.id,
        title,
        description,
        date: rawPost.posts_id.date,
        icon,
        slug: rawPost.posts_id.slug,
        tags: rawPost.posts_id.tags
      }

      return post
    })
    .filter(el => el !== null)
    .sort(function (a, b) {
      if (a.date < b.date) {
        return 1
      }
      if (a.date > b.date) {
        return -1
      }
      return 0
    })

  const tag = {
    name: rawTag.name,
    color: rawTag.color,
    description: rawTag.translations[0].description,
    posts: [...posts]
  }

  return tag
}
