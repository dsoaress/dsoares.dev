import { Link } from '@/components/Link'
import { Social } from '@/components/Social'
import { Text } from '@/components/Text'
import { useData } from '@/hooks/useData'

import { Wrapper } from './styles'

export function Footer() {
  const { d } = useData()

  return (
    <Wrapper>
      <Social />
      <Text faded size="sm">
        {d.footer}
        <Link href="https://nextjs.org" rel="noopener noreferrer" target="_blank">
          Next.js
        </Link>
      </Text>
    </Wrapper>
  )
}
