import React from 'react'
import PropTypes from 'prop-types'

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

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
