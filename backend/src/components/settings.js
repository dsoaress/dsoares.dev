import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea
} from '@chakra-ui/react'

export default function Settings({ handleSettings }) {
  return (
    <Stack as="form" m="4" onSubmit={handleSettings}>
      <Heading>Settings</Heading>
      <Stack p="4" bg="gray.300" rounded="md">
        <FormControl id="title">
          <FormLabel srOnly>Title</FormLabel>
          <Input type="text" placeholder="Title" bg="gray.50" />
        </FormControl>

        <FormControl id="description">
          <FormLabel srOnly>Description</FormLabel>
          <Textarea
            placeholder="Description"
            bg="gray.50"
            h="36"
            resize="none"
          />
        </FormControl>

        <FormControl id="footer">
          <FormLabel srOnly>Footer</FormLabel>
          <Input type="text" placeholder="Footer" bg="gray.50" />
        </FormControl>
      </Stack>
      <Button colorScheme="teal" size="sm" type="submit">
        Save
      </Button>
    </Stack>
  )
}
