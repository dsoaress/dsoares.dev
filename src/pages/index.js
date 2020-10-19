import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'
import Profile from '@components/profile'
import Posts from '@components/posts'

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
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
        posts: allMarkdownRemark(
          filter: { frontmatter: { key: { eq: "blog-post" } } }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt")
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 384, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              fields {
                slug
              }
            }
          }
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
  )

  const profile = data.profile
  const body = <div dangerouslySetInnerHTML={{ __html: profile.html }} />
  const posts = data.posts.edges
  const socialLinks = data.socialLinks.siteMetadata.socialLinks

  return (
    <Layout>
      <SEO title="Home" />
      <Profile
        body={body}
        image={profile.frontmatter.image}
        socialLinks={socialLinks}
        title={profile.frontmatter.title}
      />
      <Posts title="Posts" posts={posts} />
    </Layout>
  )
}

export default IndexPage
