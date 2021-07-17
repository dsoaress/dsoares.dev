import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { Seo } from '@/components/Seo'
import { TranslationProvider } from '@/hooks/useTranslation'
import { GlobalStyles } from '@/styles/globals'
import { theme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <TranslationProvider>
        <Seo />
        <Component {...pageProps} />
      </TranslationProvider>
    </ThemeProvider>
  )
}
