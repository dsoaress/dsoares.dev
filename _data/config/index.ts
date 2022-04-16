import tailwindConfig from '../../tailwind.config'
import { analytics } from './analytics'
import locales from './locales'
import { profile } from './profile'
import { social } from './social'

const isDev = process.env.NODE_ENV === 'development'

export const config = {
  analytics,
  colors: tailwindConfig.theme.extend.colors,
  locales,
  profile,
  social,
  showResume: isDev
}
