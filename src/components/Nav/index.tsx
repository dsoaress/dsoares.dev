import { Link, ScrollLink } from '@/components/Link'
import { useTranslation } from '@/hooks/useTranslation'

import { LanguageItem, LanguageSelector, NavLinkItem, NavLinks, Wrapper } from './styles'

export function Nav() {
  const { asPath, locale, locales, t } = useTranslation()

  return (
    <Wrapper>
      <NavLinks>
        {/* {t.nav.map(navItem => {
          return (
            <NavLinkItem key={navItem.url}>
              <ScrollLink to={navItem.url} smooth={true} offset={-76}>
                {navItem.label}
              </ScrollLink>
            </NavLinkItem>
          )
        })} */}

        <NavLinkItem>
          <LanguageSelector>
            {locales.map(localeItem => {
              return (
                <LanguageItem key={localeItem}>
                  <Link href={asPath} active={locale === localeItem} locale={localeItem}>
                    [{localeItem}]
                  </Link>
                </LanguageItem>
              )
            })}
          </LanguageSelector>
        </NavLinkItem>
      </NavLinks>
    </Wrapper>
  )
}
