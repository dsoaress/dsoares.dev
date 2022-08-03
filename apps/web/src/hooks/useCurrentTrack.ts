import useSWR from 'swr'

import type { CurrentTrack } from '@/types'

export function useCurrentTrack() {
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const { data } = useSWR<CurrentTrack>('/api/get-current-track', fetcher, {
    refreshInterval: 30000
  })

  return data
}
