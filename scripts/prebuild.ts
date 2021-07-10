import fs from 'fs'
import jimp from 'jimp'
import prettier from 'prettier'

import profileData from '../content/profile.json'

const icon = fs.readFileSync('./assets/icon.png')
const i18n = {
  locales: ['en', 'pt'],
  defaultLocale: 'en'
}

if (!fs.existsSync('./public/icons')) {
  fs.mkdirSync('./public/icons', {
    recursive: true
  })
}

jimp.read(icon, function (_, lenna) {
  const dimensions = [512, 384, 256, 192, 144, 96, 72, 48, 32]
  dimensions.map(dimension => {
    lenna.cover(dimension, dimension).write(`./public/icons/icon-${dimension}x${dimension}.png`)
  })
})

i18n.locales.map(locale => {
  const startUrl = locale === i18n.defaultLocale ? '' : locale
  const manifestDir = locale === i18n.defaultLocale ? './public' : `./public/${locale}`
  const manifestData = `
    {
      "name": "${profileData.title}",
      "short_name": "${profileData.shortTitle}",
      "start_url": "/${startUrl}",
      "background_color": "#111827",
      "theme_color": "#111827",
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

  if (!fs.existsSync(manifestDir)) {
    fs.mkdirSync(manifestDir)
  }

  const formattedManifest = prettier.format(manifestData, {
    parser: 'json'
  })

  fs.writeFileSync(`${manifestDir}/manifest.json`, formattedManifest)
})
