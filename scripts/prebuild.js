const axios = require('axios')
const fs = require('fs')
const Jimp = require('jimp')
const prettier = require('prettier')

;(async () => {
  const api = process.env.NEXT_PUBLIC_API_URL
  const settingsDir = './settings'
  const publicDir = './public'
  const iconsDir = './public/icons'

  if (!fs.existsSync(settingsDir)) {
    fs.mkdirSync(settingsDir)
  }

  const {
    data: { data: settings }
  } = await axios.get(`${api}/items/settings`)

  const {
    data: { data: settingsEN }
  } = await axios.get(
    `${api}/items/settings?fields=translations.*&deep[translations][_filter][language_code][_eq]=en`
  )

  const {
    data: { data: settingsPT }
  } = await axios.get(
    `${api}/items/settings?fields=translations.*&deep[translations][_filter][language_code][_eq]=pt`
  )

  const formattedSettings = prettier.format(JSON.stringify(settings), {
    parser: 'json'
  })

  const formattedSettingsEN = prettier.format(
    JSON.stringify(settingsEN.translations[0]),
    {
      parser: 'json'
    }
  )

  const formattedSettingsPT = prettier.format(
    JSON.stringify(settingsPT.translations[0]),
    {
      parser: 'json'
    }
  )

  fs.writeFileSync(`${settingsDir}/index.json`, formattedSettings)
  fs.writeFileSync(`${settingsDir}/en.json`, formattedSettingsEN)
  fs.writeFileSync(`${settingsDir}/pt.json`, formattedSettingsPT)

  const { title, short_title, favicon, background_color, theme_color } =
    settings

  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, {
      recursive: true
    })
  }

  const iconUrl = `${api}/assets/${favicon}`

  Jimp.read(iconUrl, function (err, lenna) {
    if (err) throw err
    lenna.resize(512, 512).write(`${iconsDir}/icon-512x512.png`)
    lenna.resize(384, 384).write(`${iconsDir}/icon-384x384.png`)
    lenna.resize(256, 256).write(`${iconsDir}/icon-256x256.png`)
    lenna.resize(192, 192).write(`${iconsDir}/icon-192x192.png`)
    lenna.resize(144, 144).write(`${iconsDir}/icon-144x144.png`)
    lenna.resize(96, 96).write(`${iconsDir}/icon-96x96.png`)
    lenna.resize(72, 72).write(`${iconsDir}/icon-72x72.png`)
    lenna.resize(48, 48).write(`${iconsDir}/icon-48x48.png`)
    lenna.resize(32, 32).write(`${iconsDir}/icon-32x32.png`)
  })

  const manifest = `
      {
        "name": "${title}",
        "short_name": "${short_title}",
        "start_url": "/",
        "background_color": "${background_color}",
        "theme_color": "${theme_color}",
        "display": "fullscreen",
        "icons": [
          {
            "purpose": "any maskable",
            "src": "icons/icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "purpose": "any maskable",
            "src": "icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "purpose": "any maskable",
            "src": "icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "purpose": "any maskable",
            "src": "icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "purpose": "any maskable",
            "src": "icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "purpose": "any maskable",
            "src": "icons/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "purpose": "any maskable",
            "src": "icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "purpose": "any maskable",
            "src": "icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      }
    `

  const formattedManifest = prettier.format(manifest, {
    parser: 'json'
  })

  fs.writeFileSync(`${publicDir}/manifest.json`, formattedManifest)
})()
