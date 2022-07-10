import type { IconsVariants } from '@/components'

// Most of this files are generated at build time
import tailwindConfig from '../tailwind.config'
import { analytics } from './analytics'
import locales from './locales.json'
import profile from './profile.json'
import skills from './skills.json'
import { social } from './social'

const isDev = process.env.NODE_ENV === 'development'

export const config = {
  analytics,
  colors: tailwindConfig.theme.extend.colors,
  locales,
  profile,
  skills: skills as IconsVariants[],
  social,
  showResume: isDev
}
