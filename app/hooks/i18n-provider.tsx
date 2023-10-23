import { ReactNode } from 'react'

import { I18nProviderClient } from '@/locales/client'

export default function I18nProvider({
  children,
  locale
}: {
  children: ReactNode
  locale: string
}) {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
}
