export default async function handler(req, res) {
  const message = req.body
  if (!req.body) return res.status(400).json({ message: 'bad request' })

  const response = await fetch(process.env.DISCORD_HOOK, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  })

  res.status(response.status).json(response.statusText)
}
