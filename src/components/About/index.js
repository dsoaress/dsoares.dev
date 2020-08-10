import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
    <S.AboutWrapper>
      <h2>{markdownRemark.frontmatter.title}</h2>
      <S.AboutTextWrapper>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <S.AboutImage
          fluid={markdownRemark.frontmatter.image.childImageSharp.fluid}
        />
      </S.AboutTextWrapper>
    </S.AboutWrapper>
  )
}

export default About
