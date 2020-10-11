import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '@components/layout'
import SEO from '@components/seo'
import Container from '@components/container'
import BioShort from '@components/bio-short'
import PostItem from '@components/post-item'

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          bioShort {
            title
            image {
              asset {
                fluid(maxWidth: 340) {
                  ...GatsbySanityImageFluid
                }
              }
            }
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
                  fluid(maxWidth: 300) {
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
        <BioShort
          image={bioShort.image?.asset.fluid}
          text={bioShort._rawText}
          title={bioShort.title}
        />
        <h1>Posts ↓</h1>
        {posts.map(({ node }, i) => (
          <PostItem
            key={i}
            title={node.title}
            date={node.date}
            description={node.description}
            image={node.mainImage?.asset.fluid}
            slug={`/${node.slug?.current}/`}
          />
        ))}
      </Container>
    </Layout>
  )
}

export default IndexPage
