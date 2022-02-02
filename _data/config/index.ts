import tailwindConfig from '../../tailwind.config'
import { analytics } from './analytics'
import { favicons } from './favicons'
import { parameters } from './parameters'
import { profile } from './profile'
import { social } from './social'

export const config = {
  analytics,
  colors: tailwindConfig.theme.extend.colors,
  favicons,
  parameters,
  profile,
  social
}
