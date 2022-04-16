import dayjs from 'dayjs'
import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/services/prisma'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.track.findMany({
    orderBy: { createdAt: 'desc' },
    take: 1
  })

  if (!result.length) {
    return res.status(400).json({ error: 'No current track found' })
  }

  const response = {
    isPlaying: dayjs(result[0].createdAt).isAfter(dayjs().subtract(30, 'seconds')),
    track: result[0]
  }

  res.status(200).json(response)
}
