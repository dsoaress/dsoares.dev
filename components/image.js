import { Box } from '@chakra-ui/react'
import NextImage from 'next/image'

export default function Image({ alt, src }) {
  return (
    <Box
      position="relative"
      borderRadius="lg"
      minH="xs"
      h="100%"
      shadow="dark-lg"
    >
      <Box
        as={NextImage}
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        borderRadius="lg"
      />
    </Box>
  )
}