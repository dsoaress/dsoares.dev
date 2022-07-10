import 'dotenv/config'

import { join } from 'node:path'

import { analytics } from './analytics'
import { favicons } from './favicons'
import { locales } from './locales'
import { manifest } from './manifest'
import { parameters } from './parameters'
import { profile } from './profile'
import { skills } from './skills'
import { social } from './social'

async function main() {
  console.log('🚀 Starting...')

  const dataDir = join(__dirname, '..', '_data')
  const { DEFAULT_LOCALE } = await parameters()
  const { FAVICON, FAVICON_SIZES, TITLE, SHORT_TITLE } = await profile({ dataDir })
  const LOCALES = await locales({ dataDir, defaultLocale: DEFAULT_LOCALE })

  manifest({
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
    faviconSizes: FAVICON_SIZES,
    title: TITLE,
    shortTitle: SHORT_TITLE
  })

  favicons({
    favicon: FAVICON,
    faviconSizes: FAVICON_SIZES
  })

  skills({ dataDir })
  social({ dataDir })
  analytics({ dataDir })
}

main()
