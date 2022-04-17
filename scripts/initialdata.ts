import { mauve } from '@radix-ui/colors'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import sharp from 'sharp'

import { config } from '@/data/config'

function initialdata() {
  const { profile } = config
  const { locales, defaultLocale } = config.locales
  const publicDir = join(__dirname, '..', 'public')
  const faviconsDir = join(publicDir, 'favicons')
  const faviconSRC = join(publicDir, config.profile.favicon.src)
  const faviconSizes = config.profile.favicon.sizes

  if (!existsSync(faviconsDir)) mkdirSync(faviconsDir)

  faviconSizes.forEach(size => {
    sharp(faviconSRC)
      .resize({ width: size, height: size })
      .toFile(`${faviconsDir}/favicon-${size}.png`)
  })

  locales.map(locale => {
    const isDefaultLocale = locale === defaultLocale
    const startUrl = isDefaultLocale ? '' : locale
    const manifestDir = join(publicDir, locale)

    const manifest = {
      name: profile.title,
      short_name: profile.shortTitle,
      id: `/${startUrl}`,
      start_url: `/${startUrl}`,
      background_color: mauve.mauve12,
      theme_color: mauve.mauve12,
      display: 'fullscreen',
      icons: faviconSizes.map(size => ({
        purpose: 'any maskable',
        src: `/favicons/favicon-${size}.png`,
        sizes: `${size}x${size}`,
        type: 'image/png'
      }))
    }

    if (!existsSync(manifestDir)) mkdirSync(manifestDir)

    writeFileSync(`${manifestDir}/manifest.json`, JSON.stringify(manifest, null, 2))
  })
}

initialdata()
