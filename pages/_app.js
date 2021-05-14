import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css'
import 'prismjs/themes/prism-okaidia.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
