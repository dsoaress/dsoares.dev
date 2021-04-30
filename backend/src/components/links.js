import { Box, Button, Grid, Stack } from '@chakra-ui/react'

export default function Links({ links }) {
  async function handleDelete(_id) {
    await fetch('/api/links', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ link: { _id } })
    })
  }

  return (
    <Box px="4" my="12" mx="auto" maxW="container.md">
      {links.length === 0 ? (
        <p>It looks like you don't have any link...</p>
      ) : (
        <Grid gap="4">
          {links.map(link => (
            <Stack direction="row" key={link._id}>
              <Button colorScheme="teal" isFullWidth>
                {link.label}
              </Button>

              <Button colorScheme="red" onClick={() => handleDelete(link._id)}>
                Delete
              </Button>
            </Stack>
          ))}
        </Grid>
      )}
    </Box>
  )
}
