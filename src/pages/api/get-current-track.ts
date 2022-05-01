import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } = process.env

  if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
    return res.status(400).json({ error: 'UPSTASH_REST_URL or UPSTASH_REDIS_URL is not set' })
  }

  const upstashClient = axios.create({
    baseURL: UPSTASH_REDIS_REST_URL,
    headers: {
      Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`
    }
  })

  const { data: currentTrack } = await upstashClient.get('current-track')

  res.status(200).json(JSON.parse(currentTrack?.result ?? '{}'))
}
