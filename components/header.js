import { Box, Flex, Heading } from '@chakra-ui/react'

export default function Header({ firstName, lastName }) {
  return (
    <Box as="header" my="8" mx="auto" px="6" maxW="container.md">
      <Flex justify="space-between" align="center">
        <Heading
          as="h1"
          fontSize="lg"
          fontWeight="normal"
          textTransform="uppercase"
          fontFamily="head"
        >
          {firstName}
          <Box as="span" color="green.600">
            {lastName}
          </Box>
        </Heading>
      </Flex>
    </Box>
  )
}
