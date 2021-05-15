import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Seo from '@/components/Seo'
import seoData from '@/seo'
import '@/styles/globals.css'
import 'prismjs/themes/prism-okaidia.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          defer
          data-website-id={seoData.trackerId}
          src={`https://${seoData.trackerUrl}/umami.js`}
          data-domains={`https://${seoData.siteUrl}`}
        />
      </Head>
      <Seo />
      <Header />
      <main className="max-w-screen-lg px-8 mx-auto space-y-16">
        <Component {...pageProps} />
        <Newsletter />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
