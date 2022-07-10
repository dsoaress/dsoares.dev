import { Redis } from '@upstash/redis'
import type { NextApiRequest, NextApiResponse } from 'next'

import type { CurrentTrack } from '@/types'

export async function getCurrentTrack(_req: NextApiRequest, res: NextApiResponse) {
  const upstashClient = Redis.fromEnv()
  const currentTrack = await upstashClient.get<CurrentTrack>('current-track')

  res.status(200).json(currentTrack)
}
