import { useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Link,
  Text
} from '@chakra-ui/react'
import { signOut } from 'next-auth/client'

export default function Header({ data }) {
  const [loading, setLoading] = useState(false)
  const { image, name } = data
  const splittedName = name.split(' ')
  const firstName = splittedName[0]

  return (
    <Box bg="gray.700" pos="fixed" top="0" left="0" right="0" zIndex="50">
      <Flex
        as="header"
        justify="space-between"
        align="center"
        p="4"
        mx="auto"
        maxW="container.md"
      >
        <Flex align="center">
          <Avatar name={firstName} src={image} mr="2" />
          <Box fontSize="sm" lineHeight="5">
            <Text>Hello,</Text>
            <Text>{firstName}</Text>
          </Box>
        </Flex>

        <ButtonGroup>
          <Link href="/">
            <Button colorScheme="teal" size="sm">
              Go to site
            </Button>
          </Link>

          <Button
            isLoading={loading}
            loadingText="Sign out"
            colorScheme="red"
            size="sm"
            onClick={() => {
              setLoading(true)
              signOut()
            }}
          >
            Sign out
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}
