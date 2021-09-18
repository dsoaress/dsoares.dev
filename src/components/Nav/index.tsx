// import { Link, ScrollLink } from '@/components/Link'
import { Link } from '@/components/Link'
import { useData } from '@/hooks/useData'
import { langNames } from '@/localesConfig'

import { LanguageItem, LanguageSelector, NavLinkItem, NavLinks, Wrapper } from './styles'

export function Nav() {
  // const { asPath, locale, locales, d } = useData()
  const { asPath, locale, locales } = useData()
  // const isHome = asPath === '/'

  return (
    <Wrapper>
      <NavLinks>
        {/* {d.nav.map(navItem => {
          if (isHome && navItem.url === '/') return

          return (
            <NavLinkItem key={navItem.url}>
              {isHome ? (
                <ScrollLink to={navItem.url} smooth={true} offset={-76}>
                  {navItem.label}
                </ScrollLink>
              ) : (
                <Link href={navItem.url === '/' ? navItem.url : `/#${navItem.url}`}>
                  {navItem.label}
                </Link>
              )}
            </NavLinkItem>
          )
        })} */}

        <NavLinkItem>
          <LanguageSelector>
            {locales.map(localeItem => {
              return (
                <LanguageItem key={localeItem}>
                  <Link href={asPath} active={locale === localeItem} locale={localeItem}>
                    [{langNames[localeItem]}]
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
