const fs = require('fs')
const Jimp = require('jimp')
const prettier = require('prettier')

const getSEO = require('../lib/getSEO')
const getTranslations = require('../lib/getTranslations')

;(async () => {
  const seoDir = './seo'
  const translationsDir = './translations'
  const publicDir = './public'
  const iconsDir = './public/icons'

  if (!fs.existsSync(seoDir)) {
    fs.mkdirSync(seoDir)
  }

  if (!fs.existsSync(translationsDir)) {
    fs.mkdirSync(translationsDir)
  }

  const seo = await getSEO()
  const translations = await getTranslations()

  const formattedSEO = prettier.format(JSON.stringify(seo), {
    parser: 'json'
  })

  const formattedTranslations = prettier.format(JSON.stringify(translations), {
    parser: 'json'
  })

  fs.writeFileSync(`${seoDir}/index.json`, formattedSEO)
  fs.writeFileSync(`${translationsDir}/index.json`, formattedTranslations)

  const { title, shortTitle, favicon, backgroundColor, themeColor } = seo

  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, {
      recursive: true
    })
  }

  Jimp.read(favicon, function (err, lenna) {
    if (err) throw err
    lenna.cover(512, 512).write(`${iconsDir}/icon-512x512.png`)
    lenna.cover(384, 384).write(`${iconsDir}/icon-384x384.png`)
    lenna.cover(256, 256).write(`${iconsDir}/icon-256x256.png`)
    lenna.cover(192, 192).write(`${iconsDir}/icon-192x192.png`)
    lenna.cover(144, 144).write(`${iconsDir}/icon-144x144.png`)
    lenna.cover(96, 96).write(`${iconsDir}/icon-96x96.png`)
    lenna.cover(72, 72).write(`${iconsDir}/icon-72x72.png`)
    lenna.cover(48, 48).write(`${iconsDir}/icon-48x48.png`)
    lenna.cover(32, 32).write(`${iconsDir}/icon-32x32.png`)
  })

  const manifest = `
      {
        "name": "${title}",
        "short_name": "${shortTitle}",
        "start_url": "/",
        "background_color": "${backgroundColor}",
        "theme_color": "${themeColor}",
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
