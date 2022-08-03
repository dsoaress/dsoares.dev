import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { createContext } from 'react'

import { config, i18n } from '@/data'
import type { I18n, Locales } from '@/types'

type DataContextProps = {
  t: I18n
  c: typeof config
}

type DataProviderProps = {
  children: ReactNode
}

export const DataContext = createContext({} as DataContextProps)

export function DataProvider({ children }: DataProviderProps) {
  const { locale } = useRouter()
  const t = i18n[locale as Locales]
  const c = config

  return <DataContext.Provider value={{ t, c }}>{children}</DataContext.Provider>
}
