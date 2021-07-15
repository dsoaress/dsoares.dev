import Head from 'next/head'

import profileData from '@/content/profile.json'
import { useTranslation } from '@/hooks/useTranslation'
import { theme } from '@/styles/theme'

export function Seo() {
  const { defaultLocale, locale, t } = useTranslation()

  return (
    <Head>
      <title>{profileData.title}</title>
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="description" content={t.description} />
      <meta name="theme-color" content={theme.colors.background} />
      <link
        rel="manifest"
        href={locale === defaultLocale ? '/manifest.json' : `/${locale}/manifest.json`}
      />
      <link rel="icon" href="/icons/icon-32x32.png" type="image/png" />
      <link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
      <link rel="apple-touch-icon" sizes="256x256" href="/icons/icon-256x256.png" />
      <link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png" />
      <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png" />
    </Head>
  )
}
