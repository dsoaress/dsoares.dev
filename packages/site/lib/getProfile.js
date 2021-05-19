import { gql } from '@apollo/client'

import client from '@/lib/apolloClient'
import serializeMdx from '@/lib/serializeMdx'

const { API_URL } = process.env

export default async function getProfile(locale) {
  const { data } = await client.query({
    query: gql`
      query Profile($locale: String) {
        profile {
          image {
            id
          }
          translations(filter: { languages_code: { _eq: $locale } }) {
            title
            body
            page_title
            page_body
          }
        }
      }
    `,
    variables: {
      locale
    }
  })

  const {
    body: rawBody,
    page_body: rawPageBody,
    page_title,
    title
  } = data.profile.translations[0]
  const body = await serializeMdx(rawBody)
  const pageBody = await serializeMdx(rawPageBody)

  const profile = {
    image: `${API_URL}/assets/${data.profile.image.id}`,
    title,
    body,
    pageTitle: page_title,
    pageBody
  }

  return profile
}
