import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Não encontrado</h1>
    <p>O que você está buscando não existe.</p>
  </Layout>
)

export default NotFoundPage
