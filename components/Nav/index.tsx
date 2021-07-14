import { useRouter } from 'next/router'

import { LanguageSelector } from '@/components/LanguageSelector'
import { ScrollLink } from '@/components/Link'
import i18nData from '@/content/i18n.json'

import { NavLinkItem, NavLinks, Wrapper } from './styles'

type NavProps = {
  label: string
  url: string
}

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
