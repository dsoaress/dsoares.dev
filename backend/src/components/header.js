import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react'
import { signOut } from 'next-auth/client'

export default function Header({ firstName, image, saving }) {
  return (
    <Box bg="gray.900" pos="fixed" top="0" left="0" right="0" zIndex="50">
      <Flex
        as="header"
        justify="space-between"
        align="center"
        p="4"
        mx="auto"
        maxW="container.md"
        color="gray.50"
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
    </Box>
  )
}
