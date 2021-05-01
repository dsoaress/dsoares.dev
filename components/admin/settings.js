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

import ImageUpload from '@/components/admin/imageUpload'

export default function Settings({ data }) {
  const [loading, setLoading] = useState(false)
  const [description, setDescription] = useState(data.description)
  const [footer, setFooter] = useState(data.footer)
  const [greeting, setGreeting] = useState(data.greeting)
  const toast = useToast()

  async function handleSettings(e) {
    e.preventDefault()
    setLoading(true)

    const image = e.currentTarget.image.files[0]
    const formData = new FormData()
    formData.append('description', description)
    formData.append('footer', footer)
    formData.append('greeting', greeting)
    formData.append('image', image)

    const res = await fetch('/api/settings', {
      method: 'PATCH',
      body: formData
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
        <Stack p="4" bg="gray.700" rounded="md">
          <FormControl id="title">
            <FormLabel srOnly>Greeting</FormLabel>
            <Input
              type="text"
              value={greeting}
              onChange={e => setGreeting(e.target.value)}
              placeholder="Title"
            />
          </FormControl>

          <FormControl id="text">
            <FormLabel srOnly>Description</FormLabel>
            <Textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
              h="36"
              resize="none"
            />
          </FormControl>

          <ImageUpload id="image" value={data.image} />

          <FormControl id="footer">
            <FormLabel srOnly>Footer</FormLabel>
            <Input
              type="text"
              value={footer}
              onChange={e => setFooter(e.target.value)}
              placeholder="Footer"
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
