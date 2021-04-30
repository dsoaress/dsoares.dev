import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  useToast
} from '@chakra-ui/react'
import { AiOutlineSave } from 'react-icons/ai'

export default function Settings({ data }) {
  const [loading, setLoading] = useState(false)
  const [footer, setFooter] = useState(data.footer)
  const [text, setText] = useState(data.profile?.text)
  const [title, setTitle] = useState(data.profile?.title)
  const toast = useToast()

  async function handleSettings(e) {
    e.preventDefault()
    setLoading(true)

    const body = {
      profile: {
        title,
        text
      },
      footer
    }

    const res = await fetch('/api/settings', {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if (res.status === 200) {
      toast({
        title: 'Saved',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
    } else {
      toast({
        title: 'We had an internal error, please try again in a few seconds',
        status: 'error',
        duration: 6000,
        isClosable: true
      })
    }

    setLoading(false)
  }

  return (
    <Box px="4" my="12" mx="auto" maxW="container.md">
      <Heading fontSize="xl" mb="4">
        Settings
      </Heading>
      <form onSubmit={handleSettings}>
        <Stack p="4" bg="gray.300" rounded="md">
          <FormControl id="title">
            <FormLabel srOnly>Title</FormLabel>
            <Input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              bg="gray.50"
            />
          </FormControl>

          <FormControl id="text">
            <FormLabel srOnly>Description</FormLabel>
            <Textarea
              value={text}
              onChange={e => setText(e.target.value)}
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
              value={footer}
              onChange={e => setFooter(e.target.value)}
              placeholder="Footer"
              bg="gray.50"
            />
          </FormControl>

          <Button
            leftIcon={<AiOutlineSave />}
            isLoading={loading}
            loadingText="Save"
            colorScheme="teal"
            type="submit"
          >
            Save
          </Button>
        </Stack>
      </form>
    </Box>
  )
}
