import { usePathname as useNextPathname } from 'next/navigation'

import { useCurrentLocale } from '../locales/client'

export function usePathname() {
  const locale = useCurrentLocale()
  const pathname = useNextPathname()
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, '')
  if (pathnameWithoutLocale === '') return '/'
  return pathnameWithoutLocale
}
