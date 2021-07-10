import { useRouter } from 'next/router'
import styled from 'styled-components'
import media from 'styled-media-query'

import { LanguageSelector } from '@/components/LanguageSelector'
import { ScrollLink } from '@/components/Link'
import i18nData from '@/content/i18n.json'

type NavProps = {
  label: string
  url: string
}

const Wrapper = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  padding: 48px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.background} 0%,
    rgba(0, 0, 0, 0) 90%
  );
  font-size: ${({ theme }) => theme.fontSizes.sm} !important;
  z-index: 10;
`

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;

  ${media.greaterThan('medium')`
    justify-content: flex-end;
  `}
`

const NavLinkItem = styled.li`
  margin-right: 24px;
`

export function Nav() {
  const { locale } = useRouter()
  const nav = i18nData.nav[locale] as NavProps[]

  return (
    <Wrapper>
      <NavLinks>
        {nav.map((navItem, i) => {
          return (
            <NavLinkItem key={i}>
              <ScrollLink to={navItem.url} smooth={true} offset={-76}>
                {navItem.label}
              </ScrollLink>
            </NavLinkItem>
          )
        })}
        <LanguageSelector />
      </NavLinks>
    </Wrapper>
  )
}
