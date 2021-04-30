import { useState } from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea
} from '@chakra-ui/react'

export default function Settings({ footer, handleSettings, profile }) {
  const [footerText, setFooterText] = useState(footer)
  const [profileTitle, setProfileTitle] = useState(profile.title)
  const [profileText, setProfileText] = useState(profile.text)

  return (
    <Stack as="form" m="4" onSubmit={handleSettings}>
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
  )
}
