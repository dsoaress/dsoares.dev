import Head from 'next/head'
import Script from 'next/script'

import { useData } from '@/hooks/useData'

import tailwind from '../../tailwind.config'

export function Seo() {
  const { defaultLocale, locale, d } = useData()

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={d.umami.src}
        data-website-id={d.umami.id}
        data-domains={d.umami.domain}
      />

      <Head>
        <title>{d.profile.title}</title>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="description" content={d.profile.description} />
        <meta name="theme-color" content={tailwind.theme.extend.colors.neutral[900]} />
        <link
          rel="manifest"
          href={locale === defaultLocale ? '/manifest.json' : `/${locale}/manifest.json`}
        />

        {d.favicons.map(favicon => {
          const { size, src } = favicon

          if (size === '32') {
            return <link rel="icon" href={src} type="image/png" key={size} />
          }

          return <link rel="apple-touch-icon" sizes={`${size}x${size}`} href={src} key={size} />
        })}
      </Head>
    </>
  )
}
