import { GraphQLClient } from 'graphql-request'

type Variables = {
  variables?: {
    [key: string]: string
  }
}

export async function github<T>(query: string, { variables }: Variables = {}) {
  const GRAPHQL_API_URL = 'https://api.github.com/graphql'
  const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN

  const graphQLClient = new GraphQLClient(GRAPHQL_API_URL)

  try {
    return await graphQLClient.request<T>(query, variables, {
      Authorization: `bearer ${ACCESS_TOKEN}`
    })
  } catch (error) {
    console.log(error)
    throw new Error('failed to fetch GitHub API')
  }
}
