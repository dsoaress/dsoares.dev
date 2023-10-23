import './globals.css'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { Aside } from './components/aside'

export function generateMetadata(): Metadata {
  return {}
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">
        <div className="min-h-screen flex">
          <Aside />
          <main className="grow overflow-hidden px-6 my-16">{children}</main>
        </div>
      </body>
    </html>
  )
}
