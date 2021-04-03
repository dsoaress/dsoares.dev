import { signIn } from 'next-auth/client'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
  Container,
  Flex,
  Grid,
  Text
} from '@chakra-ui/react'
import Link from '@/components/link'

export default function LoginBox({ accessDenied, error, providers }) {
  return (
    <Flex py={8}>
      <Container>
        <Grid
          gap={6}
          align="center"
          maxWidth="md"
          mx="auto"
          p={12}
          border="1px"
          borderColor="gray.500"
          borderRadius="lg"
        >
          {/* <Flex justify="center">
            <Logo small negative />
          </Flex> */}
          {accessDenied ? (
            <>
              <Text fontWeight="bold" textAlign="center" color="gray.50">
                {/* {t.session.accessDenied} */}
                Acesso negado
              </Text>
              <Link href="/login">
                <Button>
                  {/* {t.session.login} */}
                  Entrar
                </Button>
              </Link>
            </>
          ) : (
            <>
              {Object.values(providers).map(provider => {
                if (provider.name === 'Email') {
                  return
                }
                return (
                  <Button
                    colorScheme="green"
                    size="md"
                    onClick={() => signIn(provider.id)}
                    key={provider.name}
                  >
                    {provider.name}
                  </Button>
                )
              })}
              {error && (
                <Alert status="error" borderRadius="lg">
                  <AlertIcon />
                  {/* <AlertTitle>{t.session.error}</AlertTitle> */}
                  <AlertTitle>Não autorizado</AlertTitle>
                </Alert>
              )}
            </>
          )}
        </Grid>
      </Container>
    </Flex>
  )
}
