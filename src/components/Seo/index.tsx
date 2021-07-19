import Head from 'next/head'
import { theme } from 'twin.macro'

import profileData from '@/content/profile.json'
import { useTranslation } from '@/hooks/useTranslation'

export function Seo() {
  const { defaultLocale, locale, t } = useTranslation()

  return (
    <Head>
      <title>{profileData.title}</title>
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="description" content={t.description} />
      <meta name="theme-color" content={theme`colors.neutral.900`} />
      <link
        rel="manifest"
        href={locale === defaultLocale ? '/manifest.json' : `/${locale}/manifest.json`}
      />
      <link rel="icon" href="/icons/icon-32x32.png" type="image/png" />
      <link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72.png" />
      <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144.png" />
      <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192.png" />
      <link rel="apple-touch-icon" sizes="256x256" href="/icons/icon-256.png" />
      <link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384.png" />
      <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512.png" />
    </Head>
  )
}
