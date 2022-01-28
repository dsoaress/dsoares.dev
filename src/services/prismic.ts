import { Client } from '@prismicio/client'
import { GraphQLClient } from 'graphql-request'

type Variables = {
  variables?: {
    [key: string]: string
  }
}

export async function prismic<T>(query: string, { variables }: Variables = {}) {
  const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME
  const REF_API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`
  const GRAPHQL_API_URL = `https://${REPOSITORY}.cdn.prismic.io/graphql`
  const ACCESS_TOKEN = process.env.PRISMIC_ACCESS_TOKEN

  const PrismicClient = new Client(REF_API_URL, {
    accessToken: ACCESS_TOKEN
  })

  const graphQLClient = new GraphQLClient(GRAPHQL_API_URL, {
    method: 'GET'
  })

  try {
    const prismicAPI = await PrismicClient.getMasterRef()
    return await graphQLClient.request<T>(query, variables, {
      'Prismic-Ref': prismicAPI.ref,
      Authorization: `Token ${ACCESS_TOKEN}`
    })
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch Prismic API')
  }
}
