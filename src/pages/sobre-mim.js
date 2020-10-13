import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '@layout'
import SEO from '@seo'
import About from '@components/about'

const AboutPage = () => {
  const { sanitySiteSettings } = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          bio {
            title
            image {
              asset {
                fluid(maxWidth: 420) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            _rawText
          }
        }
      }
    `
  )

  const data = sanitySiteSettings.bio

  return (
    <Layout>
      <SEO title="Sobre mim" />
      <About data={data} />
    </Layout>
  )
}

export default AboutPage
