import React from 'react'

import Header from '../Header'
import Footer from '../Footer'
import GlobalStyles from './global'
import * as S from './styled'

const Layout = ({ children }) => (
  <S.Wrapper>
    <GlobalStyles />
    <Header />
    <S.Main>{children}</S.Main>
    <Footer />
  </S.Wrapper>
)

export default Layout
