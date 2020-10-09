import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import BlockContent from '../BlockContent'
import Social from '../Social'
import * as S from './styled'

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
    <S.Wrapper>
      <h1>{sanitySiteSettings.bio.title}</h1>
      <S.Grid>
        <S.TextWrapper>
          {sanitySiteSettings.bio._rawText && (
            <BlockContent blocks={sanitySiteSettings.bio._rawText} />
          )}
          <Social />
        </S.TextWrapper>
        <S.Image fluid={sanitySiteSettings.bio.image.asset.fluid} />
      </S.Grid>
    </S.Wrapper>
  )
}

export default About
