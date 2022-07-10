import { supabase } from '@/services/supabase'

type Parameters = 'DEFAULT_LOCALE'

export async function parameters() {
  const { data, error } = await supabase
    .from<{ key: Parameters; value: string }>('parameters')
    .select()

  if (error || !data?.length) {
    throw new Error(error?.message || 'no data found')
  }

  return data.reduce((acc, r) => ({ ...acc, [r.key]: r.value }), {}) as Record<Parameters, string>
}
