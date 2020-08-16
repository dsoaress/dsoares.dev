import React from 'react'

import * as S from './styled'

const Footer = () => (
  <S.FooterWrapper>
    <S.FooterItens>
      Made with <S.HeartIcon /> and{' '}
      <a href="https://gatsbyjs.org" alt="Gatsby" rel="">
        Gatsby
      </a>
    </S.FooterItens>
    <S.FooterItens>Daniel Soares</S.FooterItens>
  </S.FooterWrapper>
)

export default Footer
