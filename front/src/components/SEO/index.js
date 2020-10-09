import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, meta, title }) {
  const { sanitySiteSettings } = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          title
          description
          lang
        }
      }
    `
  )

  const metaDescription = description || sanitySiteSettings.description

  return (
    <Helmet
      htmlAttributes={{
        lang: sanitySiteSettings.lang
      }}
      title={title}
      titleTemplate={`%s | ${sanitySiteSettings.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

export default SEO
