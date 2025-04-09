import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import Script from 'next/script'

import { cn } from '@/lib/cn'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Daniel Soares',
  description: 'Hi! I&apos;m a full stack developer working with React, Next.js and Node.js',
  robots: 'follow, index',
  icons: [
    { rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' },
    { rel: 'icon', type: 'image/png', url: '/favicon.png' }
  ]
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<Props>): React.JSX.Element {
  return (
    <html lang="en">
      <body
        className={cn(
          'font-sans antialiased min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50',
          fontSans.variable
        )}
      >
        {children}
        <Script
          src="/script.js"
          data-host-url={process.env.NEXT_PUBLIC_UMAMI_HOST_URL}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
          strategy="beforeInteractive"
          defer
        />
      </body>
    </html>
  )
}
