import fs from 'fs'
import prettier from 'prettier'
import sharp from 'sharp'

import profileData from '../content/profile.json'
import { i18n } from '../locales.config'
import { theme } from '../tailwind.config'

const icon = fs.readFileSync('./src/assets/icon.png')

if (!fs.existsSync('./public/icons')) {
  fs.mkdirSync('./public/icons')
}
const dimensions = [512, 384, 256, 192, 144, 96, 72, 48, 32]

dimensions.map(dimension => {
  sharp(icon).resize(dimension).png().toFile(`./public/icons/icon-${dimension}.png`)
})

i18n.locales.map(locale => {
  const startUrl = locale === i18n.defaultLocale ? '' : locale
  const manifestDir = locale === i18n.defaultLocale ? './public' : `./public/${locale}`
  const manifestData = `
    {
      "name": "${profileData.title}",
      "short_name": "${profileData.shortTitle}",
      "start_url": "/${startUrl}",
      "background_color": "${theme.extend.colors.neutral[900]}",
      "theme_color": "${theme.extend.colors.neutral[900]}",
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
