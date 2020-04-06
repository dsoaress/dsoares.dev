import React from "react"
import { Link } from "gatsby"

import * as S from "./styled"
import SocialLinks from "../SocialLinks"

const Profile = () => (
  <S.ProfileWrapper>
    <S.ProfileImg></S.ProfileImg>
    <S.ProfileDesc>
      <S.ProfileDescP>
        <S.ProfileDescBig>Olá,</S.ProfileDescBig> me chamdo Daniel Soares, sou
        estudante de Ciência Política e Sociologia na{" "}
        <a href="/">
          Universidade Federal da Integração Latino-America (UNILA)
        </a>
        , em Foz do Iguaçu (Brasil), atualmente cursando o último ano da
        graduação. Aqui tem meu <Link to="/">currículo</Link> e um{" "}
        <Link to="/">blog</Link> com assuntos relacionados (ou não).
      </S.ProfileDescP>
      <SocialLinks />
    </S.ProfileDesc>
  </S.ProfileWrapper>
)

export default Profile
