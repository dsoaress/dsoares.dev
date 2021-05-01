import { Box, HStack, Text } from '@chakra-ui/react'
import { RiCopyleftLine } from 'react-icons/ri'

export default function Footer({ footer, name }) {
  return (
    <Box as="footer" my="8" fontSize="xs" lineHeight="5" textAlign="center">
      <Text>{footer}</Text>
      <HStack justify="center" align="center" spacing="1">
        <Box>{name}</Box>
        <Box>
          <RiCopyleftLine />
        </Box>
        <Box>{new Date().getFullYear()}</Box>
      </HStack>
    </Box>
  )
}
