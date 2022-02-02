import fs from 'fs'

import { config } from '@/data/config'
import { i18n } from '@/localesConfig'

export async function initialdata() {
  i18n.locales.map(async locale => {
    const startUrl = locale === i18n.defaultLocale ? '' : locale
    const manifestDir = locale === i18n.defaultLocale ? './public' : `./public/${locale}`

    const manifest = {
      name: config.profile.title,
      short_name: config.profile.shortTitle,
      start_url: `/${startUrl}`,
      background_color: config.colors.neutral[900],
      theme_color: config.colors.neutral[900],
      display: 'fullscreen',
      icons: config.favicons.map(favicon => {
        return {
          purpose: 'any maskable',
          src: favicon.src,
          sizes: `${favicon.size}x${favicon.size}`,
          type: 'image/png'
        }
      })
    }

    if (!fs.existsSync(manifestDir)) {
      fs.mkdirSync(manifestDir, { recursive: true })
    }

    fs.writeFileSync(`${manifestDir}/manifest.json`, JSON.stringify(manifest, null, 2))
  })
}
