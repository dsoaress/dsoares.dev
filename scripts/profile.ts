import { writeFileSync } from 'node:fs'
import { getPlaiceholder } from 'plaiceholder'

import { supabase } from '@/services/supabase'

type Keys = 'FAVICON_SIZES' | 'FAVICON' | 'TITLE' | 'SHORT_TITLE' | 'GITHUB_USERNAME' | 'AVATAR'

export async function profile({ dataDir }: { dataDir: string }) {
  const { data, error } = await supabase.from<{ key: Keys; value: string }>('profile').select()

  if (error || !data?.length) {
    throw new Error(error?.message || 'no data found')
  }

  const result = data.reduce((acc, r) => ({ ...acc, [r.key]: r.value }), {}) as Record<Keys, string>
  const { AVATAR, FAVICON, FAVICON_SIZES, GITHUB_USERNAME, SHORT_TITLE, TITLE } = result
  const NORMALIZED_FAVICON_SIZES = FAVICON_SIZES.split(',').map((a: string) => +a)

  const { base64: avatarBlurDataURL } = await getPlaiceholder(AVATAR, { size: 10 })

  const profile = {
    title: TITLE,
    shortTitle: SHORT_TITLE,
    githubUsername: GITHUB_USERNAME,
    avatar: {
      blur: avatarBlurDataURL,
      src: AVATAR
    },
    favicon: {
      src: FAVICON,
      sizes: NORMALIZED_FAVICON_SIZES
    }
  }

  writeFileSync(`${dataDir}/profile.json`, JSON.stringify(profile, null, 2))

  return {
    ...result,
    FAVICON_SIZES: NORMALIZED_FAVICON_SIZES
  }
}
