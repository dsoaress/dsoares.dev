import { supabase } from '@/services/supabase'

type Parameters =
  | 'DEFAULT_LOCALE'
  | 'FAVICON_SIZES'
  | 'FAVICON'
  | 'PROFILE_TITLE'
  | 'PROFILE_SHORT_TITLE'
  | 'PROFILE_GITHUB_USERNAME'
  | 'PROFILE_AVATAR'

export async function parameters() {
  console.log('getting parameters...')

  const { data, error } = await supabase
    .from<{ key: Parameters; value: string }>('parameters')
    .select()

  if (error || !data?.length) {
    throw new Error(error?.message || 'no parameters found')
  }

  return data.reduce((acc, r) => ({ ...acc, [r.key]: r.value }), {}) as Record<Parameters, string>
}
