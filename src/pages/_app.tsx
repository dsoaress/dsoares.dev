import './globals.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { Nav, Seo, TooltipProvider } from '@/components'
import { DataProvider } from '@/contexts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <DataProvider>
        <Seo />
        <Nav />
        <TooltipProvider>
          <Component {...pageProps} />
        </TooltipProvider>
      </DataProvider>
    </ThemeProvider>
  )
}
