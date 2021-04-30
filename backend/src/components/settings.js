import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea
} from '@chakra-ui/react'

export default function Settings({ footer, profile }) {
  const [footerText, setFooterText] = useState(footer)
  const [profileTitle, setProfileTitle] = useState(profile.title)
  const [profileText, setProfileText] = useState(profile.text)

  async function handleSettings(e) {
    e.preventDefault()

    const body = {
      profile: {
        title: e.currentTarget.title.value,
        text: e.currentTarget.text.value
      },
      footer: e.currentTarget.footer.value
    }

    await fetch('/api/settings', {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }

  return (
    <Box px="4" mt="12" mx="auto" maxW="container.md">
      <Stack as="form" onSubmit={handleSettings}>
        <Heading>Settings</Heading>
        <Stack p="4" bg="gray.300" rounded="md">
          <FormControl id="title">
            <FormLabel srOnly>Title</FormLabel>
            <Input
              type="text"
              value={profileTitle}
              onChange={e => setProfileTitle(e.target.value)}
              placeholder="Title"
              bg="gray.50"
            />
          </FormControl>

          <FormControl id="text">
            <FormLabel srOnly>Description</FormLabel>
            <Textarea
              value={profileText}
              onChange={e => setProfileText(e.target.value)}
              placeholder="Description"
              bg="gray.50"
              h="36"
              resize="none"
            />
          </FormControl>

          <FormControl id="footer">
            <FormLabel srOnly>Footer</FormLabel>
            <Input
              type="text"
              value={footerText}
              onChange={e => setFooterText(e.target.value)}
              placeholder="Footer"
              bg="gray.50"
            />
          </FormControl>

          <Button colorScheme="teal" type="submit">
            Save
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
