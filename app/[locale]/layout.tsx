import './globals.css'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { I18nProviderClient } from '@/app/locales/client'
import { getStaticParams } from '@/app/locales/server'

import { Aside } from '../components/aside'

export function generateMetadata(): Metadata {
  return {}
}

export function generateStaticParams() {
  return getStaticParams()
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale}>
      <I18nProviderClient locale={locale}>
        <body className="max-w-7xl mx-auto">
          <div className="min-h-screen flex">
            <Aside />
            <main className="grow overflow-hidden px-6 py-16 border-t border-b border-neutral-200">
              {children}
            </main>
          </div>
        </body>
      </I18nProviderClient>
    </html>
  )
}
