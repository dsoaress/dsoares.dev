import { useRouter } from 'next/router'
import { darken } from 'polished'
import styled from 'styled-components'

import { Link } from '@/components/Link'
import { Text } from '@/components/Text'
import i18nData from '@/content/i18n.json'

const Wrapper = styled.div`
  margin: 48px 0;

  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    text-align: center;
    color: ${({ theme }) => darken(0.3, theme.colors.text)};
    line-height: 1;
  }
`

export function Footer() {
  const { locale } = useRouter()
  const footer = i18nData.footer[locale] as string

  return (
    <Wrapper>
      <Text>
        {footer}
        <Link href="https://nextjs.org" rel="noopener noreferrer" target="_blank">
          Next.js
        </Link>
      </Text>
    </Wrapper>
  )
}
