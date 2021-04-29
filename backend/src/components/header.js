import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react'
import { signOut } from 'next-auth/client'

export default function Header({ firstName, image }) {
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      p="4"
      color="gray.50"
      bg="gray.900"
    >
      <Flex align="center">
        <Avatar name={firstName} src={image} mr="2" />
        <Box fontSize="sm" lineHeight="5">
          <Text>Hello,</Text>
          <Text>{firstName}</Text>
        </Box>
      </Flex>

      <Button colorScheme="red" size="sm" onClick={() => signOut()}>
        Sign out
      </Button>
    </Flex>
  )
}
