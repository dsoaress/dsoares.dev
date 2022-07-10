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

  const {
    DEFAULT_LOCALE,
    FAVICON,
    FAVICON_SIZES,
    PROFILE_SHORT_TITLE,
    PROFILE_TITLE,
    PROFILE_AVATAR,
    PROFILE_GITHUB_USERNAME
  } = await parameters()

  const LOCALES = await locales({ dataDir, defaultLocale: DEFAULT_LOCALE })

  const NORMALIZED_FAVICON_SIZES = FAVICON_SIZES.split(',').map((a: string) => +a)

  manifest({
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
    faviconSizes: NORMALIZED_FAVICON_SIZES,
    title: PROFILE_TITLE,
    shortTitle: PROFILE_SHORT_TITLE
  })

  favicons({
    favicon: FAVICON,
    faviconSizes: NORMALIZED_FAVICON_SIZES
  })

  skills({ dataDir })
  social({ dataDir })
  analytics({ dataDir })

  profile({
    dataDir,
    title: PROFILE_TITLE,
    shortTitle: PROFILE_SHORT_TITLE,
    githubUsername: PROFILE_GITHUB_USERNAME,
    avatar: PROFILE_AVATAR,
    favicon: FAVICON,
    faviconSizes: NORMALIZED_FAVICON_SIZES
  })
}

main()
