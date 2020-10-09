import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostMeta from '../components/PostMeta'
import BlockContent from '../components/BlockContent'
import * as S from '../components/Post/styled.js'

const BlogPost = ({ data }) => {
  const post = data.post
  console.log(post._rawBody)
  return (
    <Layout>
      <SEO title={post.title} description={post.description} />
      <S.Wrapper>
        <S.Image fluid={post.mainImage?.asset.fluid}>
          <S.Title>
            <PostMeta date={post.date} />
            <h1>{post.title}</h1>
          </S.Title>
        </S.Image>
        <S.Text>
          {post._rawBody && <BlockContent blocks={post._rawBody} />}
        </S.Text>
      </S.Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query Post($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      title
      date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      description
      mainImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawBody
    }
  }
`

export default BlogPost
