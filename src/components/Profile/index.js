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
    <S.ProfileWrapper>
      <S.ProfileImage
        fluid={markdownRemark.frontmatter.image.childImageSharp.fluid}
      />
      <S.ProfileTextWrapper>
        <h2>{markdownRemark.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <Social />
      </S.ProfileTextWrapper>
    </S.ProfileWrapper>
  )
}

export default Profile
