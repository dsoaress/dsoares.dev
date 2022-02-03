import { ClientError, GraphQLClient } from 'graphql-request'

type Variables = {
  variables?: {
    [key: string]: string
  }
}

export async function github<T>(query: string, { variables }: Variables = {}) {
  const GRAPHQL_API_URL = 'https://api.github.com/graphql'
  const graphQLClient = new GraphQLClient(GRAPHQL_API_URL)
  const { GITHUB_ACCESS_TOKEN } = process.env

  try {
    return await graphQLClient.request<T>(query, variables, {
      Authorization: `bearer ${GITHUB_ACCESS_TOKEN}`
    })
  } catch (error) {
    if (error instanceof ClientError) console.log('github api:', error.response.message)
    else console.log('github api:', error)
  }
}
