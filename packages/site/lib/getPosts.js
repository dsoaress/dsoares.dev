import { gql } from '@apollo/client'

import client from '@/lib/apolloClient'

const { API_URL } = process.env

export default async function getPosts(locale, limit) {
  const { data } = await client.query({
    query: gql`
      query Posts($locale: String, $limit: Int) {
        posts(sort: "-date", limit: $limit) {
          id
          date
          slug
          icon {
            id
          }
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
    `,
    variables: {
      locale,
      limit: limit || 1000
    }
  })

  const posts = data.posts.map(rawPost => {
    const { description, title } = rawPost.translations[0]
    const icon = `${API_URL}/assets/${rawPost.icon.id}`

    const post = {
      id: rawPost.id,
      title,
      description,
      date: rawPost.date,
      icon,
      slug: rawPost.slug,
      tags: rawPost.tags
    }

    return post
  })

  return posts
}
