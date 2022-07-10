import { writeFileSync } from 'node:fs'

import { supabase } from '@/services/supabase'

export async function analytics({ dataDir }: { dataDir: string }) {
  const { data, error } = await supabase.from<{ key: string; value: string }>('analytics').select()

  if (error || !data?.length) {
    throw new Error(error?.message || 'no data found')
  }

  const result = data.reduce((acc, r) => ({ ...acc, [r.key.toLowerCase()]: r.value }), {})

  writeFileSync(`${dataDir}/analytics.json`, JSON.stringify(result, null, 2))
}
