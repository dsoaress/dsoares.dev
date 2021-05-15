import { gql } from '@apollo/client'

import client from '@/lib/apolloClient'

export default async function getTagsPaths(locales) {
  const { data } = await client.query({
    query: gql`
      query TagsPaths {
        tags {
          name
        }
      }
    `
  })

  const paths = locales.reduce(
    (acc, locale) => [
      ...acc,
      ...data.tags.map(tag => ({
        params: { tag: tag.name },
        locale
      }))
    ],
    []
  )

  return paths
}
