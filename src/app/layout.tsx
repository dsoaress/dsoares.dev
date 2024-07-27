import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Daniel Soares',
  description: 'I am a full stack developer working with React, Next.js and Node.js',
  robots: 'follow, index'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'font-sans antialiased min-h-screen bg-neutral-900 px-4 py-12 text-neutral-50',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
