import { Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Section from '@/components/section'
import Image from '@/components/image'

export default function Profile({ image, text, title }) {
  return (
    <Section>
      <SimpleGrid
        columns={{ md: 2 }}
        gap={{ base: 8, lg: 16 }}
        alignItems="center"
      >
        <Image src={image} />
        <Stack py={{ md: 8, lg: 24 }} spacing={{ base: 4, lg: 8 }}>
          <Heading fontSize={['4xl', null, '5xl', '6xl']}>{title}</Heading>
          <Text>{text}</Text>
        </Stack>
      </SimpleGrid>
    </Section>
  )
}
