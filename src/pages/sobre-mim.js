import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'
import About from '@components/about'

const AboutPage = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "about-page" } }) {
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
      }
    `
  )

  return (
    <Layout>
      <SEO title="Sobre mim" />
      <About data={markdownRemark} />
    </Layout>
  )
}

export default AboutPage
