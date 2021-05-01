import { useState } from 'react'
import { signIn } from 'next-auth/client'
import { Button, Center, Heading, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { AiOutlineGithub as GitHub } from 'react-icons/ai'

export default function Login() {
  const [loading, setLoading] = useState(false)

  return (
    <Center pos="fixed" top="0" left="0" right="0" bottom="0" p="8">
      <Head>
        <title>Hello, stranger 🖖</title>
      </Head>
      <Stack spacing="8" textAlign="center">
        <Heading as="h1" textSize="3xl" fontWeight="bold">
          Hello, stranger 🖖
        </Heading>
        <Text>You need to be logged in</Text>
        <Center>
          <Button
            leftIcon={<GitHub />}
            isLoading={loading}
            loadingText="GitHub"
            colorScheme="teal"
            onClick={() => {
              setLoading(true)
              signIn('github')
            }}
          >
            GitHub
          </Button>
        </Center>
      </Stack>
    </Center>
  )
}
