import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostMeta from '../components/PostMeta'
import * as S from '../components/Post/styled.js'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <S.Wrapper>
        <S.Image fluid={post.frontmatter.image.childImageSharp.fluid}>
          <S.Title>
            <PostMeta
              date={post.frontmatter.date}
              timeToRead={post.timeToRead}
            />
            <h1>{post.frontmatter.title}</h1>
          </S.Title>
        </S.Image>
        <S.Text
          dangerouslySetInnerHTML={{
            __html: '<p>' + post.frontmatter.description + '</p>' + post.html
          }}
        />
      </S.Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
      html
      timeToRead
    }
  }
`

export default BlogPost
