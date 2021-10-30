import { gql } from '@/lib/gql'
import { reformatLocale } from '@/lib/localeUtils'
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
    locale: reformatLocale(node._meta.lang)
  }))
}
