import './globals.css'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { Aside } from '../components/aside'
import I18nProvider from '../hooks/i18n-provider'

export function generateMetadata(): Metadata {
  return {}
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: ReactNode
  params: { locale: string }
}) {
  return (
    <html lang="en" className="border-t border-b border-neutral-200">
      <I18nProvider locale={locale}>
        <body className="max-w-7xl mx-auto">
          <div className="min-h-screen flex">
            <Aside />
            <main className="grow overflow-hidden px-6 my-16">{children}</main>
          </div>
        </body>
      </I18nProvider>
    </html>
  )
}
