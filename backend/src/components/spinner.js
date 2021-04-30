import { Center, Spinner as ChakraSpinner } from '@chakra-ui/react'

export default function Spinner() {
  return (
    <Center pos="fixed" top="0" left="0" right="0" bottom="0">
      <ChakraSpinner />
    </Center>
  )
}
