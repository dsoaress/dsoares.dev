import { useRouter } from 'next/router'
import styled from 'styled-components'

import { Link } from '@/components/Link'

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`

const LanguageItem = styled.li`
  margin-right: 8px;

  &:last-child {
    margin: 0;
  }
`

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
