import React, { useState, useEffect } from "react"

import * as S from "./styled"

const Header = () => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === "dark"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
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
              bg="var(--background)"
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
              bg="var(--background)"
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
              bg="var(--background)"
              duration={1}
              to="/blog"
              activeClassName="active"
            >
              blog
            </S.NavLinksLink>
          </S.NavLinksItem>
          <S.NavLinksItem>
            <S.NavLinksLink title="Mudar o tema">
              <S.SunIcon
                onClick={() => {
                  window.__setPreferredTheme(isDarkMode ? "light" : "dark")
                }}
                className={theme}
              />
            </S.NavLinksLink>
          </S.NavLinksItem>
        </S.NavLinksList>
      </S.NavLinks>
    </S.Header>
  )
}

export default Header
