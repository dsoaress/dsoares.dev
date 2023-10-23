import { getI18n } from '@/app/locales/server'

export default async function About() {
  const t = await getI18n()
  return (
    <main>
      <h1>{t('nav.about')}</h1>
    </main>
  )
}
