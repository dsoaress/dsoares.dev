import { useRouter } from 'next/router'

import { Link } from '@/components/Link'
import { Social } from '@/components/Social'
import { Text } from '@/components/Text'
import i18nData from '@/content/i18n.json'

import { Wrapper } from './styles'

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
