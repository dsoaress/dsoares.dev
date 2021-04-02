import { Box, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Section from '@/components/section'

export default function Profile({ image, text, title }) {
  return (
    <Section>
      <SimpleGrid
        columns={{ md: 2 }}
        gap={{ base: 8, lg: 16 }}
        alignItems="center"
      >
        <Box
          position="relative"
          borderRadius="lg"
          minH="xs"
          h="100%"
          shadow="dark-lg"
        >
          <Box
            as={Image}
            src={image}
            layout="fill"
            objectFit="cover"
            borderRadius="lg"
          />
        </Box>
        <Stack py={{ md: 8, lg: 24 }} spacing={{ base: 4, lg: 8 }}>
          <Heading as="h1" fontSize={['4xl', null, '5xl', '6xl']}>
            {title}
          </Heading>
          <Text>{text}</Text>
        </Stack>
      </SimpleGrid>
    </Section>
  )
}
