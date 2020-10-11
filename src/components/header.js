import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Nav from './nav'

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
      <div>
        {title[0]}
        <span>{title[1]}</span>
      </div>
      <Nav />
    </header>
  )
}

export default Header
