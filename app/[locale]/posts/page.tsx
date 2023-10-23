import { getI18n } from '@/locales/server'

export default async function Posts() {
  const t = await getI18n()
  return (
    <main>
      <h1>{t('nav.posts')}</h1>
    </main>
  )
}
