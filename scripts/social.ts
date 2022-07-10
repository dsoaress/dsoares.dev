import { writeFileSync } from 'node:fs'

import { supabase } from '@/services/supabase'
import type { Social } from '@/types'

export async function social({ dataDir }: { dataDir: string }) {
  const { data, error } = await supabase
    .from<Social & { order: number }>('social')
    .select()
    .order('order', { ascending: true })

  if (error || !data?.length) {
    throw new Error(error?.message || 'no data found')
  }

  const result = data.map(({ label, url }) => ({
    label,
    url
  }))

  writeFileSync(`${dataDir}/social.json`, JSON.stringify(result, null, 2))
}
