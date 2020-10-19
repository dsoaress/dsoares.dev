import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'
import NotFound from '@components/not-found'

const NotFoundPage = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "not-found" } }) {
          frontmatter {
            title
            message
          }
        }
      }
    `
  )

  const notFound = markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={notFound.title} />
      <NotFound message={notFound.message} title={notFound.title} />
    </Layout>
  )
}

export default NotFoundPage
