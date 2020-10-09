import React from 'react'

import * as S from './styled'

const Footer = () => (
  <S.Wrapper>
    <S.Item>
      Made with <S.HeartIcon /> and{' '}
      <a href="https://gatsbyjs.org" alt="Gatsby" rel="">
        Gatsby
      </a>
    </S.Item>
    <S.Item>Daniel Soares</S.Item>
  </S.Wrapper>
)

export default Footer
