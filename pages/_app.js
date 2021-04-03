import { Provider } from 'next-auth/client'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/theme'
import '@fontsource/rubik-mono-one'
import '@fontsource/rubik'

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}
