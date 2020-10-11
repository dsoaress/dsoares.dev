import React from 'react'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Layout from '@layout'
import SEO from '@seo'
import PostMeta from '@components/post-meta'
import BlockContent from '@components/block-content'

const BlogPost = ({ data }) => {
  const post = data.post
  console.log(post._rawBody)
  return (
    <Layout>
      <SEO title={post.title} description={post.description} />
      <div>
        <BackgroundImage fluid={post.mainImage?.asset.fluid}>
          <div>
            <PostMeta date={post.date} />
            <h1>{post.title}</h1>
          </div>
        </BackgroundImage>
        {post._rawBody && <BlockContent blocks={post._rawBody} />}
      </div>
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
