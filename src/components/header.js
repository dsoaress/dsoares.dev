import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Container from '@components/container'

const Header = () => {
  const { sanitySiteSettings } = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          title
        }
      }
    `
  )
  const title = sanitySiteSettings.title
    .split(/(\s+)/)
    .filter(e => e.trim().length > 0)

  return (
    <header>
      <Container>
        <Link to="/" alt="Home">
          {title[0]}
          <span>{title[1]}</span>
        </Link>

        <Link to="/sobre-mim" alt="Sobre mim" activeClassName="active">
          Sobre mim
        </Link>
      </Container>
    </header>
  )
}

export default Header
