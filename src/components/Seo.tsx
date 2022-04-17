import { mauve } from '@radix-ui/colors'
import Head from 'next/head'
import Script from 'next/script'

import { useData } from '@/hooks/useData'

export function Seo() {
  const { locale, c, t } = useData()

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
        <meta name="description" content={t.description} />
        <meta name="theme-color" content={mauve.mauve12} />
        <link rel="manifest" href={`/${locale}/manifest.json`} />

        {c.profile.favicon.sizes.map(size => (
          <link
            rel={size === 32 ? 'icon' : 'apple-touch-icon'}
            sizes={`${size}x${size}`}
            href={`/favicons/favicon-${size}.png`}
            type="image/png"
            key={size}
          />
        ))}
      </Head>
    </>
  )
}
