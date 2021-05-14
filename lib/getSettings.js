const axios = require('axios')

async function getSettings() {
  const api = process.env.NEXT_PUBLIC_API_URL

  const {
    data: { data: settings }
  } = await axios.get(`${api}/items/settings`)

  delete settings.translations

  const {
    data: {
      data: { translations: en }
    }
  } = await axios.get(
    `${api}/items/settings?fields=translations.*&deep[translations][_filter][language_code][_eq]=en`
  )

  const {
    data: {
      data: { translations: pt }
    }
  } = await axios.get(
    `${api}/items/settings?fields=translations.*&deep[translations][_filter][language_code][_eq]=pt`
  )

  settings.en = en[0]
  settings.pt = pt[0]

  return settings
}

module.exports = getSettings
