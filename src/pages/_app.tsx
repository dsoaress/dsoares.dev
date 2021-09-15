import { AppProps } from 'next/app'

import { Seo } from '@/components/Seo'
import { DataProvider } from '@/hooks/useData'
import { GlobalStyles } from '@/styles/globals'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <GlobalStyles />
      <Seo />
      <Component {...pageProps} />
    </DataProvider>
  )
}
