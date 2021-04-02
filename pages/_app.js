import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/theme'
import '@fontsource/rubik-mono-one'
import '@fontsource/rubik'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
