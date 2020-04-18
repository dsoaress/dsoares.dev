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
            fluid(maxHeight: 550, quality: 100) {
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
        <h1>{greeting}</h1>
        {text}
        <SocialLinks />
      </S.ProfileDesc>
    </S.ProfileWrapper>
  )
}

export default Profile
