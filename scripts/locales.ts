import { writeFileSync } from 'node:fs'

import { supabase } from '@/services/supabase'

export async function locales({
  defaultLocale,
  dataDir
}: {
  defaultLocale: string
  dataDir: string
}) {
  console.log('getting locales...')

  const { data, error } = await supabase.from<{ locale: string }>('locales').select()

  if (error || !data?.length) {
    throw new Error(error?.message || 'no locales found')
  }

  const locales = data.map(r => r.locale)

  writeFileSync(`${dataDir}/locales.json`, JSON.stringify({ locales, defaultLocale }, null, 2))

  return locales
}
