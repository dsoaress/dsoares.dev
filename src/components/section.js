import { Box, Container } from '@chakra-ui/react'

export default function Section({ children, ...rest }) {
  return (
    <Box as="section" my={16} {...rest}>
      <Container>{children}</Container>
    </Box>
  )
}
