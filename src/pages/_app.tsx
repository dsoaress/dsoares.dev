import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'

import { Seo } from '@/components/Seo'
import { TranslationProvider } from '@/hooks/useTranslation'
import { fetcher } from '@/lib/fetcher'
import { GlobalStyles } from '@/styles/globals'
import { theme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <TranslationProvider>
        <Seo />
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
      </TranslationProvider>
    </ThemeProvider>
  )
}
