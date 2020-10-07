import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Wrapper = styled.div`
  display: grid;
  align-content: center;
  height: 100%;
  text-align: center;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: não encontrado" />
    <Wrapper>
      <h1>
        Não encontrado{' '}
        <span role="img" aria-label="sed">
          😥
        </span>
      </h1>
      <p>O que você está buscando não existe.</p>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
