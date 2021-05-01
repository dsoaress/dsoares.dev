import { Box, Grid, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function Profile({ alt, description, greeting, image }) {
  return (
    <Box as="section" my="16" mx="auto" px="6" maxW="container.md">
      <Grid
        templateColumns={{ md: '1fr 1fr' }}
        gap={{ base: '8', lg: '16' }}
        alignItems="center"
      >
        <Box
          pos="relative"
          borderRadius="lg"
          h={{ base: 64, md: 'full' }}
          shadow="lg"
        >
          <Box
            as={Image}
            src={image}
            alt={alt}
            layout="fill"
            quality="90"
            borderRadius="lg"
            objectFit="cover"
          />
        </Box>
        <Box py={{ md: 8, lg: 24 }}>
          <Box
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            mb={{ base: '5', lg: '8' }}
          >
            {greeting}
          </Box>
          <Text>{description}</Text>
        </Box>
      </Grid>
    </Box>
  )
}
