import Head from 'next/head'

export default function Meta({ description, name }) {
  return (
    <Head>
      <title>{name}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={name} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={name} />
      <meta property="twitter:description" content={description} />
      <link rel="manifest" href="manifest.json" />
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      <link rel="apple-touch-icon" href="icons/icon-512x512.png" />
      <meta name="theme-color" content="#E61F5B" />
      <meta name="apple-mobile-web-app-status-bar" content="#E61F5B" />
    </Head>
  )
}
