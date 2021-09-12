import Head from 'next/head'
import { theme } from 'twin.macro'

import favicons from '@/content/favicons.json'
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
      <link rel="icon" href={favicons['32']} type="image/png" />
      <link rel="apple-touch-icon" sizes="48x48" href={favicons['48']} />
      <link rel="apple-touch-icon" sizes="72x72" href={favicons['72']} />
      <link rel="apple-touch-icon" sizes="96x96" href={favicons['96']} />
      <link rel="apple-touch-icon" sizes="144x144" href={favicons['144']} />
      <link rel="apple-touch-icon" sizes="192x192" href={favicons['192']} />
      <link rel="apple-touch-icon" sizes="256x256" href={favicons['256']} />
      <link rel="apple-touch-icon" sizes="384x384" href={favicons['384']} />
      <link rel="apple-touch-icon" sizes="512x512" href={favicons['512']} />
    </Head>
  )
}
