import { Center, Spinner as ChakraSpinner } from '@chakra-ui/react'
import Head from 'next/head'

export default function Spinner() {
  return (
    <Center pos="fixed" top="0" left="0" right="0" bottom="0">
      <Head>
        <title>Loading...</title>
      </Head>
      <ChakraSpinner />
    </Center>
  )
}
