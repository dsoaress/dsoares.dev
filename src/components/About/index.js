import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"
import SocialLinks from "../SocialLinks"

const About = ({ title, text }) => {
  const { aboutImage } = useStaticQuery(
    graphql`
      query {
        aboutImage: file(relativePath: { eq: "about.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 900, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <S.AboutWrapper>
      <S.AboutTitle>{title}</S.AboutTitle>
      <S.AboutFlex>
        <S.AboutDesc>
          {text}
          <SocialLinks />
        </S.AboutDesc>
        <S.AboutImage fluid={aboutImage.childImageSharp.fluid} />
      </S.AboutFlex>
    </S.AboutWrapper>
  )
}

export default About
