import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Social from '../Social'
import * as S from './styled'

const About = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "about-page" } }) {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 420, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          html
        }
      }
    `
  )

  return (
    <S.Wrapper>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <S.Grid>
        <S.TextWrapper>
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
          <Social />
        </S.TextWrapper>
        <S.Image
          fluid={markdownRemark.frontmatter.image.childImageSharp.fluid}
        />
      </S.Grid>
    </S.Wrapper>
  )
}

export default About
