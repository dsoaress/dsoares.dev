import { setStaticParamsLocale } from 'next-international/server'

import { getI18n } from '@/app/locales/server'

export default async function About({ params: { locale } }: { params: { locale: string } }) {
  setStaticParamsLocale(locale)
  const t = await getI18n()
  return (
    <main>
      <h1>{t('nav.about')}</h1>
    </main>
  )
}
