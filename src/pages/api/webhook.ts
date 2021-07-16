import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const message = req.body
  if (!req.body) return res.status(400).json({ message: 'bad request' })

  const response = await axios.post(process.env.DISCORD_HOOK as string, message)

  if (response.status === 200) {
    return res.status(200).json('ok')
  } else {
    return res.status(response.status).json(response.statusText)
  }
}
