import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Social from '../Social'
import * as S from './styled'

const Profile = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "index-page" } }) {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 340, quality: 80) {
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
      <S.Image fluid={markdownRemark.frontmatter.image.childImageSharp.fluid} />
      <S.TextWrapper>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <Social />
      </S.TextWrapper>
    </S.Wrapper>
  )
}

export default Profile
