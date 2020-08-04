import React from 'react'

import * as S from './styled'
import SocialLinks from '../SocialLinks'

const About = ({ title, text, image }) => (
  <S.AboutWrapper>
    <h1>{title}</h1>
    <S.AboutFlex>
      <S.AboutDesc>
        {text}
        <SocialLinks />
      </S.AboutDesc>
      <S.AboutImage fluid={image} />
    </S.AboutFlex>
  </S.AboutWrapper>
)

export default About
