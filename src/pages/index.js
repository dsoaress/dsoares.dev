import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '@layout'
import SEO from '@seo'
import Container from '@components/container'
import { H2 } from '@components/typography'
import BioShort from '@components/bio-short'
import Posts from '@components/posts'

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          bioShort {
            title
            _rawText
          }
        }
        allSanityPost(sort: { fields: date, order: DESC }) {
          edges {
            node {
              slug {
                current
              }
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
              mainImage {
                asset {
                  fluid(maxWidth: 600) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const bioShort = data.sanitySiteSettings.bioShort
  const posts = data.allSanityPost.edges

  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <p className="text-red-800 py-16">Teste</p>
        <BioShort text={bioShort._rawText} title={bioShort.title} />
        <H2>Posts ↓</H2>
        <Posts data={posts} />
      </Container>
    </Layout>
  )
}

export default IndexPage
