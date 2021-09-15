import Head from 'next/head'
import { theme } from 'twin.macro'

import { useData } from '@/hooks/useData'

export function Seo() {
  const { defaultLocale, locale, d } = useData()

  return (
    <Head>
      <script
        async
        defer
        src={d.umami.src}
        data-website-id={d.umami.id}
        data-domains={d.umami.domain}
      />

      <title>{d.profile.title}</title>
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="description" content={d.profile.description} />
      <meta name="theme-color" content={theme`colors.neutral.900`} />
      <link
        rel="manifest"
        href={locale === defaultLocale ? '/manifest.json' : `/${locale}/manifest.json`}
      />
      <link rel="icon" href={d.favicons['32']} type="image/png" />
      <link rel="apple-touch-icon" sizes="48x48" href={d.favicons['48']} />
      <link rel="apple-touch-icon" sizes="72x72" href={d.favicons['72']} />
      <link rel="apple-touch-icon" sizes="96x96" href={d.favicons['96']} />
      <link rel="apple-touch-icon" sizes="144x144" href={d.favicons['144']} />
      <link rel="apple-touch-icon" sizes="192x192" href={d.favicons['192']} />
      <link rel="apple-touch-icon" sizes="256x256" href={d.favicons['256']} />
      <link rel="apple-touch-icon" sizes="384x384" href={d.favicons['384']} />
      <link rel="apple-touch-icon" sizes="512x512" href={d.favicons['512']} />
    </Head>
  )
}
