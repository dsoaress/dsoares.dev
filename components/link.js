import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

export default function Link({ children, href, locale, ...rest }) {
  return (
    <NextLink href={href} locale={locale}>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  )
}
