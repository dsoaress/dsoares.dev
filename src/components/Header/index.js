import React, { useState, useEffect } from 'react'

import * as S from './styled'

const Header = () => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === 'dark'

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
            <S.NavLinksLink to="/" activeClassName="active">
              home
            </S.NavLinksLink>
          </S.NavLinksItem>
          <S.NavLinksItem>
            <S.NavLinksLink to="/sobre-mim" activeClassName="active">
              sobre mim
            </S.NavLinksLink>
          </S.NavLinksItem>
          <S.NavLinksItem>
            <S.NavLinksLink to="/blog" activeClassName="active">
              blog
            </S.NavLinksLink>
          </S.NavLinksItem>
          <S.NavLinksItem
            title="Mudar o tema"
            onClick={() => {
              window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
            }}
            className={theme}
          >
            <S.SunIcon />
          </S.NavLinksItem>
        </S.NavLinksList>
      </S.NavLinks>
    </S.Header>
  )
}

export default Header
