import 'tailwindcss/tailwind.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import Seo from '@/components/Seo'
import profileData from '@/content/profile.json'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script async defer src={profileData.umami.src} data-website-id={profileData.umami.id} />
      </Head>
      <Seo />
      <Component {...pageProps} />
    </>
  )
}
