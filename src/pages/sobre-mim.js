import React from 'react'

import Layout from '@layout'
import SEO from '@seo'
import Container from '@components/container'
import About from '@components/about'

const AboutPage = () => (
  <Layout>
    <SEO title="Sobre mim" />
    <Container bg="pink">
      <About />
    </Container>
  </Layout>
)

export default AboutPage
