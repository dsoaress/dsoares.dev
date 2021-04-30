import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack
} from '@chakra-ui/react'
import { AiOutlineTags, AiOutlineLink, AiOutlineFileAdd } from 'react-icons/ai'

export default function AddLink({ handleLink }) {
  return (
    <Stack
      as="form"
      p="4"
      m="4"
      mt="24"
      bg="gray.300"
      rounded="md"
      onSubmit={handleLink}
    >
      <FormControl id="label">
        <FormLabel srOnly>Label</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.400"
            children={<AiOutlineTags />}
          />
          <Input type="text" placeholder="Label" bg="gray.50" />
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
          <Input type="text" placeholder="URL" bg="gray.50" />
        </InputGroup>
      </FormControl>

      <Button leftIcon={<AiOutlineFileAdd />} colorScheme="teal" type="submit">
        Add
      </Button>
    </Stack>
  )
}
