import React from 'react'

import links from './content'
import * as S from './styled'

const Nav = () => (
  <S.NavWrapper>
    <S.NavList>
      {links.map((link, i) => (
        <S.NavItem key={i}>
          <S.NavLink to={link.url} activeClassName="active">
            {link.label}
          </S.NavLink>
        </S.NavItem>
      ))}
    </S.NavList>
  </S.NavWrapper>
)

export default Nav
