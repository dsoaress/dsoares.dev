export default async function handler(req, res) {
  const { name, email, locale } = req.body
  const {
    CONVERTKIT_API_KEY,
    CONVERTKIT_API_FORM_ID_EN,
    CONVERTKIT_API_FORM_ID_PT
  } = process.env

  if (!name || !email || !locale)
    return res.status(400).json({ message: 'bad request' })

  const form = {
    en: CONVERTKIT_API_FORM_ID_EN,
    pt: CONVERTKIT_API_FORM_ID_PT
  }

  const body = {
    api_key: CONVERTKIT_API_KEY,
    first_name: name,
    email
  }

  const response = await fetch(
    `https://api.convertkit.com/v3/forms/${form[locale]}/subscribe`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  )

  res.status(response.status).json(response.statusText)
}
