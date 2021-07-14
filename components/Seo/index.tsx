import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'

import profileData from '@/content/profile.json'
import { theme } from '@/styles/theme'

export function Seo() {
  const { locale, defaultLocale } = useRouter()
  const description = profileData.description[locale]

  return (
    <DefaultSeo
      defaultTitle={profileData.title}
      description={description}
      openGraph={{
        locale,
        type: 'website',
        images: [
          {
            url: 'ogImage',
            width: 1200,
            height: 630,
            alt: profileData.title
          }
        ]
      }}
      twitter={{
        cardType: 'summary_large_image'
      }}
      additionalLinkTags={[
        {
          rel: 'manifest',
          href: locale === defaultLocale ? '/manifest.json' : `/${locale}/manifest.json`
        },
        {
          rel: 'icon',
          href: '/icons/icon-32x32.png',
          type: 'image/png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '48x48',
          href: '/icons/icon-48x48.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '72x72',
          href: '/icons/icon-72x72.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '96x96',
          href: '/icons/icon-96x96.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '144x144',
          href: '/icons/icon-144x144.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '192x192',
          href: '/icons/icon-192x192.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '256x256',
          href: '/icons/icon-256x256.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '384x384',
          href: '/icons/icon-384x384.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '512x512',
          href: '/icons/icon-512x512.png'
        }
      ]}
      additionalMetaTags={[
        {
          name: 'theme-color',
          content: theme.colors.background
        }
      ]}
    />
  )
}
