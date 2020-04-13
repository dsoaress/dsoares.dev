import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import * as S from "./styled"
import SocialLinks from "../SocialLinks"

const Profile = () => {
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
          <S.ProfileDescBig>Olá,</S.ProfileDescBig> me chamo Daniel Soares, sou
          estudante de Ciência Política e Sociologia na{" "}
          <a
            href="https://unila.edu.br"
            alt="Universidade Federal da Integração Latino-America (UNILA)"
            target="_blank"
            rel="noopener noreferrer"
          >
            Universidade Federal da Integração Latino-America (UNILA)
          </a>
          , em Foz do Iguaçu (Brasil), atualmente cursando o último ano da
          graduação. Aqui tem meu <Link to="/curriculo">currículo</Link> e um{" "}
          <Link to="/blog">blog</Link> com assuntos relacionados (ou não).
        </S.ProfileDescP>
        <SocialLinks />
      </S.ProfileDesc>
    </S.ProfileWrapper>
  )
}

export default Profile
