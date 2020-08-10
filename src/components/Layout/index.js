import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import Footer from '../Footer'
import GlobalStyles from './global'
import * as S from './styled'

const Layout = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
    <Footer />
  </S.LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
