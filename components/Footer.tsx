import { useRouter } from 'next/router'
import styled from 'styled-components'

import { Link } from '@/components/Link'
import { Social } from '@/components/Social'
import { Text } from '@/components/Text'
import i18nData from '@/content/i18n.json'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 48px 0;

  p {
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing.xl};
  }
`

export function Footer() {
  const { locale } = useRouter()
  const footer = i18nData.footer[locale] as string

  return (
    <Wrapper>
      <Social />
      <Text faded size="sm">
        {footer}
        <Link href="https://nextjs.org" rel="noopener noreferrer" target="_blank">
          Next.js
        </Link>
      </Text>
    </Wrapper>
  )
}
