import { AiFillHome } from 'react-icons/ai'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Link } from '@/components/Link'
import { Text } from '@/components/Text'
import { useData } from '@/hooks/useData'

type ErrorProps = {
  statusCode: number | string
  errorMessage: string
}

export function Error({ statusCode, errorMessage }: ErrorProps) {
  const { d } = useData()

  return (
    <main className="fixed inset-0 flex items-center justify-center">
      <Container>
        <div className="text-center">
          <Heading size="xl" className="mb-6">
            {statusCode}
          </Heading>

          <Text className="mb-4">{errorMessage}</Text>

          <Link href="/">
            <Button icon={AiFillHome}>{d.errors.buttonLabel}</Button>
          </Link>
        </div>
      </Container>
    </main>
  )
}
