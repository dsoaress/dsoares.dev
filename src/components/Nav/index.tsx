import { LanguageSelector } from '@/components/LanguageSelector'
import { ScrollLink } from '@/components/Link'
import { useTranslation } from '@/hooks/useTranslation'

import { NavLinkItem, NavLinks, Wrapper } from './styles'

export function Nav() {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <NavLinks>
        {t.nav.map((navItem, i) => {
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
