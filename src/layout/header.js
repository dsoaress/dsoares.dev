import { Box, Flex, Heading } from '@chakra-ui/react'
import Section from '@/components/section'
import LangSelector from '@/components/lang-selector'
import content from '@/content'

export default function Header() {
  const title = content.title.split(/(\s+)/).filter(e => e.trim().length > 0)
  return (
    <Section as="header" my={8}>
      <Flex align="center" justify="space-between">
        <Heading
          as="h1"
          fontSize="lg"
          fontFamily="head"
          fontWeight="normal"
          textTransform="uppercase"
        >
          {title[0]}
          <Box as="span" color="highlight">
            {title[1]}
          </Box>
        </Heading>
        <LangSelector />
      </Flex>
    </Section>
  )
}
