import axios from 'axios'

export default async function handler(req, res) {
  const { code, path } = req.body
  if (!code || !path) return res.status(400).json({ message: 'bad request' })

  const { status } = await axios.post(process.env.DISCORD_HOOK, {
    content: `${code}: ${path}`
  })

  if (status === 204) {
    return res.status(204).json()
  }
}
