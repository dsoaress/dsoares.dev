import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'
import Post from '@components/post'
import Profile from '@components/profile'

const BlogPost = ({ data }) => {
  const post = data.post
  const postBody = <div dangerouslySetInnerHTML={{ __html: post.html }} />
  const profile = data.profile
  const profileBody = <div dangerouslySetInnerHTML={{ __html: profile.html }} />
  const socialLinks = data.socialLinks.siteMetadata.socialLinks

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <Post
        body={postBody}
        date={post.frontmatter.date}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
      />
      <div className="mx-4 md:mx-8">
        <Profile
          body={profileBody}
          className="bg-muted rounded-xl shadow-md py-8"
          image={profile.frontmatter.image}
          socialLinks={socialLinks}
          title={profile.frontmatter.title}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
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
    profile: markdownRemark(frontmatter: { key: { eq: "profile" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 384, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      html
    }
    socialLinks: site {
      siteMetadata {
        socialLinks {
          label
          url
        }
      }
    }
  }
`

export default BlogPost
