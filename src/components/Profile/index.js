import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"
import SocialLinks from "../SocialLinks"

const Profile = ({ greeting, text }) => {
  const { profileImage } = useStaticQuery(
    graphql`
      query {
        profileImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <S.ProfileWrapper>
      <S.ProfileImage fluid={profileImage.childImageSharp.fluid} />
      <S.ProfileDesc>
        <S.ProfileDescP>
          <S.ProfileDescBig>{greeting}</S.ProfileDescBig> {text}
        </S.ProfileDescP>
        <SocialLinks />
      </S.ProfileDesc>
    </S.ProfileWrapper>
  )
}

export default Profile
