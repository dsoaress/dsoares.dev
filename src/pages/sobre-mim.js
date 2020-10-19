import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'
import About from '@components/about'

const AboutPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        about: markdownRemark(frontmatter: { key: { eq: "about" } }) {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 610, quality: 80) {
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
  )

  const about = data.about
  const body = <div dangerouslySetInnerHTML={{ __html: about.html }} />
  const socialLinks = data.socialLinks.siteMetadata.socialLinks

  return (
    <Layout>
      <SEO title="Sobre mim" />
      <About
        body={body}
        image={about.frontmatter.image}
        socialLinks={socialLinks}
        title={about.frontmatter.title}
      />
    </Layout>
  )
}

export default AboutPage
