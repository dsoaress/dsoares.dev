import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Provider } from 'next-auth/client'
import { ChakraProvider } from '@chakra-ui/react'
import * as Fathom from 'fathom-client'

import theme from '@/theme'
import '@fontsource/rubik-mono-one'
import '@fontsource/rubik'

export default function App({ Component, pageProps }) {
  const { events } = useRouter()

  useEffect(() => {
    window.dataLayer = window.dataLayer || []

    Fathom.load('GMSVDEIT', {
      url: 'https://limpet.dsoares.me/script.js',
      includedDomains: ['dsoares.me']
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }

    events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}
