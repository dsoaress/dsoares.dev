import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

import { config } from '@/data'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <Script
            strategy="beforeInteractive"
            src={config.analytics.src}
            data-website-id={config.analytics.id}
            data-domains={config.analytics.domain}
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
