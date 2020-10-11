import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import BlockContent from './block-content'
import Social from './social'

const About = () => {
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

  return (
    <div>
      <h1>{sanitySiteSettings.bio.title}</h1>
      <div>
        <div>
          {sanitySiteSettings.bio._rawText && (
            <BlockContent blocks={sanitySiteSettings.bio._rawText} />
          )}
          <Social />
        </div>
        <Img fluid={sanitySiteSettings.bio.image?.asset.fluid} />
      </div>
    </div>
  )
}

export default About
