import { ApolloClient, InMemoryCache } from '@apollo/client'

const { API_URL } = process.env

const client = new ApolloClient({
  uri: `${API_URL}/graphql`,
  cache: new InMemoryCache()
})

export default client
