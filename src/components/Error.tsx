import { AiFillHome } from 'react-icons/ai'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Link } from '@/components/Link'
import { Text } from '@/components/Text'
import { useData } from '@/hooks/useData'
import { styled } from '@/styles/stitches'

type ErrorProps = {
  statusCode: number | string
  errorMessage: string
}

const Wrapper = styled('div', {
  display: 'flex',
  position: 'fixed',
  inset: 0,
  alignItems: 'center',
  justifyContent: 'center'
})

const Content = styled('div', {
  textAlign: 'center'
})

export function Error({ statusCode, errorMessage }: ErrorProps) {
  const { t } = useData()

  return (
    <Wrapper>
      <Container>
        <Content>
          <Heading size="xl" css={{ marginButton: 24 }}>
            {statusCode}
          </Heading>

          <Text css={{ marginButton: 16 }}>{errorMessage}</Text>

          <Link href="/">
            <Button icon={AiFillHome}>{t.errors.buttonLabel}</Button>
          </Link>
        </Content>
      </Container>
    </Wrapper>
  )
}
