import Head from 'next/head'
import Script from 'next/script'

import { useData } from '@/hooks/useData'

export function Seo() {
  const { locale, c } = useData()

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={c.analytics.src}
        data-website-id={c.analytics.id}
        data-domains={c.analytics.domain}
      />

      <Head>
        <title>{c.profile.title}</title>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="description" content={c.profile.description[locale]} />
        <meta name="theme-color" content={c.colors.neutral[900]} />
        <link rel="manifest" href={`/${locale}/manifest.json`} />

        {c.favicons.map(({ size, src }) => (
          <link
            rel={size === '32' ? 'icon' : 'apple-touch-icon'}
            sizes={`${size}x${size}`}
            href={src}
            type="image/png"
            key={size}
          />
        ))}
      </Head>
    </>
  )
}
