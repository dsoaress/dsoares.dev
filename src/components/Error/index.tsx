import { AiFillHome } from 'react-icons/ai'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Link } from '@/components/Link'
import { Text } from '@/components/Text'
import { useData } from '@/hooks/useData'

import { Content, Wrapper } from './styles'

type ErrorProps = {
  statusCode: number
  errorMessage: string
}

export function Error({ statusCode, errorMessage }: ErrorProps) {
  const { d } = useData()

  return (
    <Wrapper>
      <Container>
        <Content>
          <Heading size="xl" margin={6}>
            {statusCode}
          </Heading>

          <Text>{errorMessage}</Text>

          <Link href="/">
            <Button>
              <AiFillHome />
              {d.errors.buttonLabel}
            </Button>
          </Link>
        </Content>
      </Container>
    </Wrapper>
  )
}
