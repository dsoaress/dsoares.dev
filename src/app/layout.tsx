import '@/styles/globals.css'

import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

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
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<Props>): JSX.Element {
  return (
    <html lang="en">
      <body
        className={cn(
          'font-sans antialiased min-h-screen bg-neutral-900 px-4 py-12 text-neutral-50',
          fontSans.variable
        )}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
