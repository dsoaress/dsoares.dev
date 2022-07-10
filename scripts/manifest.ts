import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import tailwindConfig from '../tailwind.config'

export function manifest({
  defaultLocale,
  locales,
  faviconSizes,
  title,
  shortTitle
}: {
  defaultLocale: string
  locales: string[]
  faviconSizes: number[]
  title: string
  shortTitle: string
}) {
  const { colors } = tailwindConfig.theme.extend
  const publicDir = join(__dirname, '..', 'public')

  if (!existsSync(publicDir)) mkdirSync(publicDir)

  locales?.map(locale => {
    const isDefaultLocale = locale === defaultLocale
    const startUrl = isDefaultLocale ? '' : locale
    const manifestDir = join(publicDir, locale)
    const manifest = {
      name: title,
      short_name: shortTitle,
      id: `/${startUrl}`,
      start_url: `/${startUrl}`,
      background_color: colors.neutral[900],
      theme_color: colors.neutral[900],
      display: 'fullscreen',
      icons: faviconSizes?.map(size => ({
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
