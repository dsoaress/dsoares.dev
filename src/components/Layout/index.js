import React from "react"
import PropTypes from "prop-types"

import GlobalStyled from "./global"
import * as S from "./styled"

import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyled />
      <Header />
      <S.MainWrapper>{children}</S.MainWrapper>
      <Footer />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
