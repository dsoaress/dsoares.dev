import { AppProps } from 'next/app'

import { Nav } from '@/components/Nav'
import { Seo } from '@/components/Seo'
import { Providers } from '@/providers'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Seo />
      <Nav />
      <Component {...pageProps} />
    </Providers>
  )
}
