import { Link } from '@/components/Link'
import { useTranslation } from '@/hooks/useTranslation'

import { LanguageItem, Wrapper } from './styles'

export function LanguageSelector() {
  const { asPath, locale, locales } = useTranslation()

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
