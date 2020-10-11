import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import BlockContent from './block-content'
import Social from './social'

const Profile = () => {
  const { sanitySiteSettings } = useStaticQuery(
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
      }
    `
  )

  return (
    <div>
      <Img fluid={sanitySiteSettings.bioShort.image?.asset.fluid} />
      <div>
        <h1>{sanitySiteSettings.bioShort.title}</h1>
        {sanitySiteSettings.bioShort._rawText && (
          <BlockContent blocks={sanitySiteSettings.bioShort._rawText} />
        )}
        <Social />
      </div>
    </div>
  )
}

export default Profile
