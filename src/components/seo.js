import { useRouter } from 'next/router'
import Head from 'next/head'

export default function SEO({ data }) {
  const router = useRouter()
  const { locale } = router
  const profile = data.profile[locale]

  const description = profile?.title + ' ' + profile?.text
  return (
    <Head>
      <title>{data.name}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={data.name} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={data.name} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={data.name} />
      <meta property="twitter:description" content={description} />
      <link rel="manifest" href="manifest.json" />
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      <link rel="apple-touch-icon" href="icons/icon-512x512.png" />
      <meta name="theme-color" content="#E61F5B" />
      <meta name="apple-mobile-web-app-status-bar" content="#E61F5B" />
    </Head>
  )
}
