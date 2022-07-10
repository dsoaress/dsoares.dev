import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { createContext } from 'react'

import { config } from '@/data'
import { i18n } from '@/i18n'
import type { I18n, Locales } from '@/types'

type DataContextProps = {
  t: I18n
  c: typeof config
}

export const DataContext = createContext({} as DataContextProps)

export function DataProvider({ children }: { children: ReactNode }) {
  const { locale } = useRouter()
  const t = i18n[locale as Locales]
  const c = config

  return <DataContext.Provider value={{ t, c }}>{children}</DataContext.Provider>
}
