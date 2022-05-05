import './globals.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { Nav } from '@/components/Nav'
import { Seo } from '@/components/Seo'
import { DataProvider } from '@/contexts/DataContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <DataProvider>
        <Seo />
        <Nav />
        <Component {...pageProps} />
      </DataProvider>
    </ThemeProvider>
  )
}
