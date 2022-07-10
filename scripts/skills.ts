import { writeFileSync } from 'node:fs'

import { supabase } from '@/services/supabase'

export async function skills({ dataDir }: { dataDir: string }) {
  console.log('getting skills...')

  const { data, error } = await supabase
    .from<{ skill: string; order: number }>('skills')
    .select()
    .order('order', { ascending: true })

  if (error || !data?.length) {
    throw new Error(error?.message || 'no skills found')
  }

  const skills = data.map(r => r.skill)

  writeFileSync(`${dataDir}/skills.json`, JSON.stringify(skills, null, 2))
}
