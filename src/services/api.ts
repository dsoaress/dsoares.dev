import { Redis } from '@upstash/redis'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getPlaiceholder } from 'plaiceholder'

import { config } from '@/data'
import type { CurrentTrack } from '@/types'

export async function getAvatarBlurDataURL() {
  const { base64: avatarBlurDataURL } = await getPlaiceholder(config.profile.avatar, { size: 10 })
  return avatarBlurDataURL
}

export async function getCurrentTrack(_req: NextApiRequest, res: NextApiResponse) {
  const upstashClient = Redis.fromEnv()
  const currentTrack = await upstashClient.get<CurrentTrack>('current-track')

  res.status(200).json(currentTrack)
}
