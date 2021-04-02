import { Box, Container } from '@chakra-ui/react'

export default function Section({ children, ...rest }) {
  return (
    <Box as="section" my={16} {...rest}>
      <Container maxW="container.md" px={8}>
        {children}
      </Container>
    </Box>
  )
}
