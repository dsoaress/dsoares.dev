import React from 'react'

import Header from '@components/header'
import Footer from '@components/footer'
import '@styles/tailwind.scss'

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
