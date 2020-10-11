import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '@theme'

import Header from '@components/header'
import Footer from '@components/footer'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes[2] + 'px'};
    font-family: ${theme.fonts.body};
    line-height: ${theme.lineHeights.body};
    font-weight: ${theme.fontWeights.body};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.text};
    font-family: ${theme.fonts.heading};
    line-height: ${theme.lineHeights.heading};
    font-weight: ${theme.fontWeights.heading};
    margin-top: ${theme.space[5] + 'px'};
    margin-bottom: ${theme.space[4] + 'px'};
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
    <Footer />
  </ThemeProvider>
)

export default Layout
