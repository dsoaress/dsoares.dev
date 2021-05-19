import { gql } from '@apollo/client'

import client from '@/lib/apolloClient'

export default async function getPostsPaths(locales) {
  const { data } = await client.query({
    query: gql`
      query PostsPaths {
        posts {
          slug
        }
      }
    `
  })

  const paths = locales.reduce(
    (acc, locale) => [
      ...acc,
      ...data.posts.map(post => ({
        params: { post: post.slug },
        locale
      }))
    ],
    []
  )

  return paths
}
