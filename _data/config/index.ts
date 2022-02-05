import tailwindConfig from '../../tailwind.config'
import { analytics } from './analytics'
import { favicons } from './favicons'
import locales from './locales'
import { profile } from './profile'
import { social } from './social'

const isDev = process.env.NODE_ENV === 'development'

export const config = {
  analytics,
  colors: tailwindConfig.theme.extend.colors,
  favicons,
  githubUsername: 'dsoaress',
  locales,
  profile,
  social,
  showResume: isDev ? true : false
}
