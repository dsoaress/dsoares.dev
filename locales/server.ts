import { createI18nServer } from 'next-international/server'

export const { getI18n, getStaticParams } = createI18nServer({
  en: () => import('./en.json'),
  es: () => import('./es.json'),
  pt: () => import('./pt.json')
})
