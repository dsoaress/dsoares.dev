import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Provider } from 'next-auth/client'
import { ChakraProvider } from '@chakra-ui/react'
import PlausibleProvider from 'next-plausible'

import theme from '@/theme'
import '@fontsource/rubik-mono-one'
import '@fontsource/rubik'

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <PlausibleProvider
          domain="dsoares.me"
          customDomain="https://stats.dsoares.me"
          trackOutboundLinks={true}
        >
          <Component {...pageProps} />
        </PlausibleProvider>
      </ChakraProvider>
    </Provider>
  )
}
