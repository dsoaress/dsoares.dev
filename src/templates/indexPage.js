import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Profile from "../components/Profile"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Profile
        greeting={data.markdownRemark.frontmatter.greeting}
        text={
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        }
      />
    </Layout>
  )
}

export const query = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        greeting
      }
      id
      html
    }
  }
`

export default IndexPage
