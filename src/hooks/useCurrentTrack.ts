import useSWR from 'swr'

import { fetcher } from '@/services/fetcher'
import type { CurrentTrack } from '@/types/currentTrack'

export function useCurrentTrack() {
  const { data } = useSWR<CurrentTrack>('/api/get-current-track', fetcher, {
    refreshInterval: 30000
  })

  return data
}
