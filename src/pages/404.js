import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '@components/layout'
import SEO from '@components/seo'

const NotFoundPage = () => {
  const { sanitySiteSettings } = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          notFoundPage {
            message
            title
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title={sanitySiteSettings.notFoundPage.title} />
      <div>
        <h1>{sanitySiteSettings.notFoundPage.title}</h1>
        <p>{sanitySiteSettings.notFoundPage.message}</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
