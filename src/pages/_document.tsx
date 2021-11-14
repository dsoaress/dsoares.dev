import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

import { getCssText } from '@/styles/stitches.config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
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
