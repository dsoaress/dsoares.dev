import { langNames } from '@/localesConfig'

export function formatLocale(locale?: string) {
  if (!locale) throw new Error('locale is not defined')
  return langNames[locale] as string
}

export function reformatLocale(langName: string) {
  return Object.keys(langNames).find(key => langNames[key] === langName) as string
}
