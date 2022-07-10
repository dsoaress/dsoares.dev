import { config, i18n } from '@/data'

type Locales = keyof typeof i18n
const { defaultLocale } = config.locales as { defaultLocale: Locales }
type I18n = typeof i18n[typeof defaultLocale]

export type { I18n, Locales }
