import 'tailwindcss/tailwind.css'

import type { AppProps } from 'next/app'

import { Nav } from '@/components/Nav'
import { Seo } from '@/components/Seo'
import { DataProvider } from '@/contexts/DataContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Seo />
      <Nav />
      <Component {...pageProps} />
    </DataProvider>
  )
}
