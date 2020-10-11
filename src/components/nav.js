import React from 'react'
import { Link } from 'gatsby'

const links = [
  {
    label: 'home',
    url: '/'
  },
  {
    label: 'sobre mim',
    url: '/sobre-mim/'
  },
  {
    label: 'blog',
    url: '/blog/'
  }
]

const Nav = () => (
  <nav>
    <ul>
      {links.map((link, i) => (
        <li key={i}>
          <Link to={link.url} activeClassName="active">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
