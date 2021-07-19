import { AppProps } from 'next/app'

import { Seo } from '@/components/Seo'
import { TranslationProvider } from '@/hooks/useTranslation'
import { GlobalStyles } from '@/styles/globals'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TranslationProvider>
      <GlobalStyles />
      <Seo />
      <Component {...pageProps} />
    </TranslationProvider>
  )
}
