import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import * as S from '../components/BlogPost/styled.js'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <S.BlogPostWrapper>
        <h2>{post.frontmatter.title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: '<p>' + post.frontmatter.description + '</p>' + post.html
          }}
        />
      </S.BlogPostWrapper>
    </Layout>
  )
}

export const query = graphql`
  query Post($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      id
      html
      timeToRead
    }
  }
`

export default BlogPost
