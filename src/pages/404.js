import React from 'react'
import Layout from '@layout'
import SEO from '@seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Não encontrado" />
    <div className="container text-center my-56">
      <h1>
        Não encontrado{' '}
        <span role="img" aria-label="triste">
          😥
        </span>
      </h1>
      <p>O que você está buscando não existe.</p>
    </div>
  </Layout>
)

export default NotFoundPage
