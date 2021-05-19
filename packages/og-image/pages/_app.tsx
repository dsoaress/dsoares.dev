import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import '@fontsource/lato/latin-900.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
