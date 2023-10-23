import { setStaticParamsLocale } from 'next-international/server'

import { getI18n } from '@/app/locales/server'

export default async function Posts({ params: { locale } }: { params: { locale: string } }) {
  setStaticParamsLocale(locale)
  const t = await getI18n()
  return (
    <main>
      <h1>{t('nav.posts')}</h1>
    </main>
  )
}
