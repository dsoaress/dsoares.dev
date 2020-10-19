import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'
import BioShort from '@components/bio-short'
import Posts from '@components/posts'

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "index-page" } }) {
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
        allMarkdownRemark(
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
        site {
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

  const bioShort = data.markdownRemark
  const body = <div dangerouslySetInnerHTML={{ __html: bioShort.html }} />
  const posts = data.allMarkdownRemark.edges
  const socialLinks = data.site.siteMetadata.socialLinks

  return (
    <Layout>
      <SEO title="Home" />
      <BioShort
        body={body}
        image={bioShort.frontmatter.image}
        socialLinks={socialLinks}
        title={bioShort.frontmatter.title}
      />
      <Posts title="Posts ↓" posts={posts} />
    </Layout>
  )
}

export default IndexPage
