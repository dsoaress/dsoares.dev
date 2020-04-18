import React from "react"

import * as S from "./styled"
import SocialLinks from "../SocialLinks"

const Profile = ({ greeting, text, image }) => (
  <S.ProfileWrapper>
    <S.ProfileImage fluid={image} />
    <S.ProfileDesc>
      <h1>{greeting}</h1>
      {text}
      <SocialLinks />
    </S.ProfileDesc>
  </S.ProfileWrapper>
)

export default Profile
