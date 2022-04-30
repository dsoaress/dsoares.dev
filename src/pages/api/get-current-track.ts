import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const { UPSTASH_URL, UPSTASH_TOKEN } = process.env

  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    return res.status(400).json({ error: 'UPSTASH_REST_URL or UPSTASH_REDIS_URL is not set' })
  }

  const upstashClient = axios.create({
    baseURL: UPSTASH_URL,
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`
    }
  })

  const { data: isPlaying } = await upstashClient.get('isPlaying')
  const { data: currentTrack } = await upstashClient.get('currentTrack')

  res.status(200).json({
    isPlaying: isPlaying?.result === 'true',
    track: JSON.parse(currentTrack?.result ?? '{}')
  })
}
