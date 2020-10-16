import { useStaticQuery, graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'
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
                  fluid(maxWidth: 384, quality: 90) {
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
      <SEO title="Home" />
      <BioShort text={bioShort._rawText} title={bioShort.title} />
      <Posts title="Posts ↓" posts={posts} />
    </Layout>
  )
}

export default IndexPage
