import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Profile from '../components/Profile'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Profile />
  </Layout>
)

export default IndexPage
