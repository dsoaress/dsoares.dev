import React from 'react'

import links from './content'
import * as S from './styled'

const Nav = () => (
  <S.Wrapper>
    <S.List>
      {links.map((link, i) => (
        <S.Item key={i}>
          <S.LinkItem to={link.url} activeClassName="active">
            {link.label}
          </S.LinkItem>
        </S.Item>
      ))}
    </S.List>
  </S.Wrapper>
)

export default Nav
