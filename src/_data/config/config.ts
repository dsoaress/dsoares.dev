import locales from '../../../locales.config.json'
import tailwindConfig from '../../../tailwind.config'
import { profile } from './profile'
import { skills } from './skills'
import { social } from './social'

const isDev = process.env.NODE_ENV === 'development'

export const config = {
  colors: tailwindConfig.theme.extend.colors,
  locales,
  profile,
  skills,
  social,
  showResume: isDev
}
