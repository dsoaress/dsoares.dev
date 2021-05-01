import { Box, Button, Grid, Stack, useToast } from '@chakra-ui/react'
import { AiOutlineDelete } from 'react-icons/ai'

export default function Links({ data }) {
  const toast = useToast()

  async function handleDelete(_id) {
    const res = await fetch('/api/links', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ link: { _id } })
    })

    if (res.status === 200) {
      toast({
        title: 'Link deleted',
        status: 'info',
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
  }

  return (
    <Box px="4" my="12" mx="auto" maxW="container.md">
      {data.links.length === 0 ? (
        <p>It looks like you don't have any link...</p>
      ) : (
        <Grid gap="4">
          {data.links.map(link => (
            <Stack direction="row" key={link._id}>
              <Button colorScheme="teal" isFullWidth>
                {link.label}
              </Button>

              <Button
                leftIcon={<AiOutlineDelete />}
                colorScheme="red"
                onClick={() => handleDelete(link._id)}
              >
                Delete
              </Button>
            </Stack>
          ))}
        </Grid>
      )}
    </Box>
  )
}
