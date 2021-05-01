import { Box, Button, Link } from '@chakra-ui/react'

export default function Links({ data }) {
  return (
    <Box as="section" my="16" mx="auto" px="6" maxW="container.md">
      {data.map(item => {
        const { _id, label, url } = item
        if (!label || !url) return
        return (
          <Link href={url} key={_id} isExternal>
            <Button
              size="lg"
              isFullWidth
              bg="green.600"
              _hover={{ bg: 'green.700' }}
              textTransform="uppercase"
              my="3"
            >
              {label}
            </Button>
          </Link>
        )
      })}
    </Box>
  )
}
