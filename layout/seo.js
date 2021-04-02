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
    </Head>
  )
}
