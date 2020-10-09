import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import BlockContent from '../BlockContent'
import Social from '../Social'
import * as S from './styled'

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
    <S.Wrapper>
      <S.Image fluid={sanitySiteSettings.bioShort.image?.asset.fluid} />
      <S.TextWrapper>
        <h1>{sanitySiteSettings.bioShort.title}</h1>
        {sanitySiteSettings.bioShort._rawText && (
          <BlockContent blocks={sanitySiteSettings.bioShort._rawText} />
        )}
        <Social />
      </S.TextWrapper>
    </S.Wrapper>
  )
}

export default Profile
