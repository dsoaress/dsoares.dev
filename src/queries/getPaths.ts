import { gql } from '@/lib/gql'
import { prismic } from '@/services/prismic'
import { PostsResponse } from '@/types/post'

export async function getPaths() {
  const data = await prismic<PostsResponse>(gql`
    query {
      allPosts {
        edges {
          node {
            _meta {
              uid
              lang
            }
          }
        }
      }
    }
  `)

  return data.allPosts.edges.map(({ node }) => ({
    params: { uid: node._meta.uid },
    locale: node._meta.lang
  }))
}
