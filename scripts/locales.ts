import { writeFileSync } from 'node:fs'

import { supabase } from '@/services/supabase'

export async function locales({
  defaultLocale,
  dataDir
}: {
  defaultLocale: string
  dataDir: string
}) {
  const { data, error } = await supabase
    .from<{ locale: string; translations: Object; order: number }>('locales')
    .select()
    .order('order', { ascending: true })

  if (error || !data?.length) {
    throw new Error(error?.message || 'no data found')
  }

  const locales = data.map(r => r.locale)
  const i18n = data.reduce((acc, r) => ({ ...acc, [r.locale]: r.translations }), {})

  writeFileSync(`${dataDir}/locales.json`, JSON.stringify({ locales, defaultLocale }, null, 2))
  writeFileSync(`${dataDir}/i18n.json`, JSON.stringify(i18n, null, 2))

  return locales
}
