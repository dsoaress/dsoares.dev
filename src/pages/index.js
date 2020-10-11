import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Profile from '../components/profile'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Profile />
  </Layout>
)

export default IndexPage
