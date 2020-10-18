import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'
import Post from '@components/post'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const body = <div dangerouslySetInnerHTML={{ __html: post.html }} />

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <Post
        body={body}
        date={post.frontmatter.date}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
      />
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
            fluid(maxWidth: 1216, quality: 90) {
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
