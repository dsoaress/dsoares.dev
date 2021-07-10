import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'

import { Seo } from '@/components/Seo'
import profileData from '@/content/profile.json'
import { fetcher } from '@/lib/fetcher'
import { GlobalStyles } from '@/styles/globals'
import { theme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Seo />
      <Head>
        <script async defer src={profileData.umami.src} data-website-id={profileData.umami.id} />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  )
}
