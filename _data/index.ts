import type { IconsVariants } from '@/components'
import type { Social } from '@/types'

import tailwindConfig from '../tailwind.config'
// this files are generated at build time
import analytics from './analytics.json'
import locales from './locales.json'
import profile from './profile.json'
import skills from './skills.json'
import social from './social.json'

const isDev = process.env.NODE_ENV === 'development'

export const config = {
  analytics,
  colors: tailwindConfig.theme.extend.colors,
  locales,
  profile,
  skills: skills as IconsVariants[],
  social: social as Social[],
  showResume: isDev
}
