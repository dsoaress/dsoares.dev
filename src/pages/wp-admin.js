import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '@seo'
import WPAdmin from '@components/wp-admin'
import '@styles/tailwind.scss'

const WPAdminPage = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "wp-admin" } }) {
          frontmatter {
            title
            video {
              publicURL
            }
          }
        }
      }
    `
  )

  const data = markdownRemark.frontmatter
  return (
    <>
      <SEO title={data.title} />
      <WPAdmin video={data.video.publicURL} />
    </>
  )
}

export default WPAdminPage
