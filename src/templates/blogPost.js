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
      <S.BlogPostImage fluid={post.frontmatter.image.childImageSharp.fluid}>
        <S.BlogPostTitle>
          <h1>{post.frontmatter.title}</h1>
        </S.BlogPostTitle>
      </S.BlogPostImage>
      <S.BlogPostWrapper>
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
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      id
      html
      timeToRead
    }
  }
`

export default BlogPost
