import { AiFillHome } from 'react-icons/ai'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Link } from '@/components/Link'
import { Text } from '@/components/Text'
import { useTranslation } from '@/hooks/useTranslation'

import { Content, Wrapper } from './styles'

type ErrorProps = {
  statusCode: number
  errorMessage: string
}

export function Error({ statusCode, errorMessage }: ErrorProps) {
  const { t } = useTranslation()

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
              {t.errors.buttonLabel}
            </Button>
          </Link>
        </Content>
      </Container>
    </Wrapper>
  )
}
