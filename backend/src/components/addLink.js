import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useToast
} from '@chakra-ui/react'
import { AiOutlineTags, AiOutlineLink, AiOutlineFileAdd } from 'react-icons/ai'

export default function AddLink() {
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  async function handleLink(e) {
    e.preventDefault()
    setLoading(true)

    const label = e.currentTarget.label.value
    const url = e.currentTarget.url.value

    const res = await fetch('/api/links', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ link: { label, url } })
    })

    if (res.status === 200) {
      toast({
        title: 'Saved',
        status: 'success',
        duration: 3000,
        isClosable: true
      })

      e.target.reset()
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
    <Box px="4" mt="24" mx="auto" maxW="container.md">
      <Heading fontSize="xl" mb="4">
        Links
      </Heading>
      <Stack as="form" p="4" bg="gray.300" rounded="md" onSubmit={handleLink}>
        <FormControl id="label">
          <FormLabel srOnly>Label</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.400"
              children={<AiOutlineTags />}
            />
            <Input type="text" placeholder="Label" bg="gray.50" required />
          </InputGroup>
        </FormControl>

        <FormControl id="url">
          <FormLabel srOnly>URL</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.400"
              children={<AiOutlineLink />}
            />
            <Input type="text" placeholder="URL" bg="gray.50" required />
          </InputGroup>
        </FormControl>

        <Button
          leftIcon={<AiOutlineFileAdd />}
          isLoading={loading}
          loadingText="Add link"
          colorScheme="teal"
          type="submit"
        >
          Add link
        </Button>
      </Stack>
    </Box>
  )
}
