import Head from 'next/head'

import { useData } from '@/hooks/useData'

export function Seo() {
  const { locale, c, t } = useData()

  return (
    <>
      <Head>
        <title>{c.profile.title}</title>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="description" content={t.description} />
        <meta name="theme-color" content={c.colors.neutral[900]} />
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
