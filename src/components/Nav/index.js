import React from 'react'

import * as S from './styled'

const Nav = () => (
  <S.NavWrapper>
    <S.NavList>
      <S.NavItem>
        <S.NavLink to="/">home</S.NavLink>
      </S.NavItem>
      <S.NavItem>
        <S.NavLink to="/">sobre</S.NavLink>
      </S.NavItem>
      <S.NavItem>
        <S.NavLink to="/">blog</S.NavLink>
      </S.NavItem>
    </S.NavList>
  </S.NavWrapper>
)

export default Nav
