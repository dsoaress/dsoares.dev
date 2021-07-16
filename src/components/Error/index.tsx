import { AiFillHome } from 'react-icons/ai'

import { useTranslation } from '@/hooks/useTranslation'

import { Button } from '../Button'
import { Heading } from '../Heading'
import { Link } from '../Link'
import { Text } from '../Text'
import { Content, Wrapper } from './styles'

type ErrorProps = {
  statusCode: number
  errorMessage: string
}

export function Error({ statusCode, errorMessage }: ErrorProps) {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Content>
        <Heading size="xl" margin="xl">
          {statusCode}
        </Heading>

        <Text>{errorMessage}</Text>

        <Link href="/">
          <Button>
            <AiFillHome />
            {t.error.buttonLabel}
          </Button>
        </Link>
      </Content>
    </Wrapper>
  )
}
