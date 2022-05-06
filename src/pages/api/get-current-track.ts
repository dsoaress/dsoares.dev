import { Redis } from '@upstash/redis'
import type { NextApiRequest, NextApiResponse } from 'next'

import { CurrentTrack } from '@/types'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const upstashClient = Redis.fromEnv()
  const currentTrack = await upstashClient.get<CurrentTrack>('current-track')

  res.status(200).json(currentTrack)
}
