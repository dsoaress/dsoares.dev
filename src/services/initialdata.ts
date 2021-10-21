import fs from 'fs'

import { i18n } from '../../locales.config'
import { theme } from '../../tailwind.config'
import { getInitialData } from './queries'

export async function initialdata() {
  await Promise.all(
    i18n.locales.map(async locale => {
      const startUrl = locale === i18n.defaultLocale ? '' : locale
      const manifestDir = locale === i18n.defaultLocale ? './public' : `./public/${locale}`

      const data = await getInitialData(locale)

      if (!fs.existsSync('./data')) {
        fs.mkdirSync('./data')
      }

      fs.writeFileSync(`./data/${locale}.json`, JSON.stringify(data, null, 2))

      const manifestData = {
        name: data.profile.title,
        short_name: data.profile.shortTitle,
        start_url: `/${startUrl}`,
        background_color: theme.extend.colors.neutral[900],
        theme_color: theme.extend.colors.neutral[900],
        display: 'fullscreen',
        icons: data.favicons.map(favicon => {
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

      fs.writeFileSync(`${manifestDir}/manifest.json`, JSON.stringify(manifestData, null, 2))
    })
  )
}
