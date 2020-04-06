import React from "react"

import * as S from "./styled"

const Header = () => (
  <S.Header>
    <S.Logo>
      Daniel<S.LastName>Soares</S.LastName>
    </S.Logo>
    <S.NavLinks>
      <S.NavLinksList>
        <S.NavLinksItem>
          <S.NavLinksLink
            cover
            direction="right"
            bg="#1a1d23"
            duration={1}
            to="/"
            activeClassName="active"
          >
            home
          </S.NavLinksLink>
        </S.NavLinksItem>
        <S.NavLinksItem>
          <S.NavLinksLink
            cover
            direction="right"
            bg="#1a1d23"
            duration={1}
            to="/curriculo"
            activeClassName="active"
          >
            currículo
          </S.NavLinksLink>
        </S.NavLinksItem>
        <S.NavLinksItem>
          <S.NavLinksLink
            cover
            direction="right"
            bg="#1a1d23"
            duration={1}
            to="/blog"
            activeClassName="active"
          >
            blog
          </S.NavLinksLink>
        </S.NavLinksItem>
        <S.NavLinksItem>
          <S.NavLinksLink
            cover
            direction="right"
            bg="#1a1d23"
            duration={1}
            to="/lightmode"
          >
            <S.SunIcon />
          </S.NavLinksLink>
        </S.NavLinksItem>
      </S.NavLinksList>
    </S.NavLinks>
  </S.Header>
)

export default Header
