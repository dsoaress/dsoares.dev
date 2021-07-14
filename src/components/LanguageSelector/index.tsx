import { useRouter } from 'next/router'

import { Link } from '@/components/Link'

import { LanguageItem, Wrapper } from './styles'

export function LanguageSelector() {
  const { asPath, locale, locales } = useRouter()

  return (
    <Wrapper>
      {locales.map((localeItem, i) => {
        return (
          <LanguageItem key={i}>
            <Link href={asPath} active={locale === localeItem} locale={localeItem}>
              [{localeItem}]
            </Link>
          </LanguageItem>
        )
      })}
    </Wrapper>
  )
}
