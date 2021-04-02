import { Button, Link, Stack } from '@chakra-ui/react'
import Section from '@/components/section'

export default function Links({ data }) {
  return (
    <Section>
      <Stack spacing={6}>
        {data.map((item, i) => (
          <Link href={item.url} key={i} isExternal>
            <Button
              bg="highlight"
              color="white"
              _hover={{ bg: 'hover' }}
              py={8}
              w="100%"
            >
              {item.label}
            </Button>
          </Link>
        ))}
      </Stack>
    </Section>
  )
}
