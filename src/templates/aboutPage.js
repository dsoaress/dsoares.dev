import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import About from "../components/About"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Sobre mim" />
      <About
        title={data.markdownRemark.frontmatter.title}
        text={
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        }
        image={data.markdownRemark.frontmatter.image.childImageSharp.fluid}
      />
    </Layout>
  )
}

export const query = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 580, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      id
      html
    }
  }
`

export default AboutPage
