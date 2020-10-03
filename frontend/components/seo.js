import Head from 'next/head'
import * as data from '../config.json'

const SEO = () => (
  <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <title>{data.title}</title>
    <link rel="icon" href="/favicon.ico" />

    <meta name="description" content={data.description} />
    <meta data-react-helmet="true" property="og:title" content={data.title} />
    <meta
      data-react-helmet="true"
      property="og:description"
      content={data.description}
    />
    <meta data-react-helmet="true" property="og:type" content="website" />
    <meta data-react-helmet="true" name="twitter:card" content="summary" />
    <meta data-react-helmet="true" name="twitter:title" content={data.title} />
    <meta
      data-react-helmet="true"
      name="twitter:description"
      content={data.description}
    />
  </Head>
)

export default SEO
