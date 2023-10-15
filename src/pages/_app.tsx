import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { Nav, Seo } from '@/components'
import { DataProvider } from '@/contexts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <DataProvider>
        <Seo />
        <Nav />
        <Component {...pageProps} />
      </DataProvider>
      <Analytics />
    </ThemeProvider>
  )
}
