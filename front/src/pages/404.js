import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Wrapper = styled.div`
  display: grid;
  align-content: center;
  height: 100%;
  text-align: center;
`

const NotFoundPage = () => {
  const { sanitySiteSettings } = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          notFoundPage {
            message
            title
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title={sanitySiteSettings.notFoundPage.title} />
      <Wrapper>
        <h1>{sanitySiteSettings.notFoundPage.title}</h1>
        <p>{sanitySiteSettings.notFoundPage.message}</p>
      </Wrapper>
    </Layout>
  )
}

export default NotFoundPage
