import { useRouter } from 'next/router'
import Head from 'next/head'
import content from '@/content'

export default function SEO() {
  const router = useRouter()
  const { locale } = router
  const t = content[locale]
  return (
    <Head>
      <title>{content.title}</title>
      <meta name="description" content={t.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={content.title} />
      <meta property="og:description" content={t.description} />
      <meta property="og:site_name" content={content.title} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={content.title} />
      <meta property="twitter:description" content={t.description} />
      <link rel="manifest" href="manifest.json" />
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      <link rel="apple-touch-icon" href="icons/icon-512x512.png" />
      <meta name="theme-color" content="#E61F5B" />
      <meta name="apple-mobile-web-app-status-bar" content="#E61F5B" />
    </Head>
  )
}
