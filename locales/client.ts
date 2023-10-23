'use client'

import { createI18nClient } from 'next-international/client'

export const { useI18n, I18nProviderClient } = createI18nClient({
  en: () => import('./en.json'),
  es: () => import('./es.json'),
  pt: () => import('./pt.json')
})
