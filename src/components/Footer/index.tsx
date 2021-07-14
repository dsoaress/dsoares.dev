import { Link } from '@/components/Link'
import { Social } from '@/components/Social'
import { Text } from '@/components/Text'
import { useTranslation } from '@/hooks/useTranslation'

import { Wrapper } from './styles'

export function Footer() {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Social />
      <Text faded size="sm">
        {t.footer}
        <Link href="https://nextjs.org" rel="noopener noreferrer" target="_blank">
          Next.js
        </Link>
      </Text>
    </Wrapper>
  )
}
