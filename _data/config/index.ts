import tailwindConfig from '../../tailwind.config'
import { analytics } from './analytics'
import { favicons } from './favicons'
import locales from './locales'
import { parameters } from './parameters'
import { profile } from './profile'
import { social } from './social'

export const config = {
  analytics,
  colors: tailwindConfig.theme.extend.colors,
  favicons,
  githubUsername: 'dsoaress',
  locales,
  parameters,
  profile,
  social
}
