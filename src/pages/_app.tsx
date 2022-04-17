import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { Nav } from '@/components/Nav'
import { Seo } from '@/components/Seo'
import { DataProvider } from '@/contexts/DataContext'
import { globalStyles } from '@/styles/globalStyles'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <DataProvider>
      <Seo />
      <Nav />
      <Component {...pageProps} />
    </DataProvider>
  )
}
