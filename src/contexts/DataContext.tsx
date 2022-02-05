import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { createContext } from 'react'

import { config } from '@/data/config'
import { i18n } from '@/data/i18n'
import type { I18n } from '@/types/i18n'

type DataContextProps = {
  asPath: string
  locale: 'en' | 'pt'
  locales: string[]
  t: I18n
  c: typeof config
}

type RouterProps = Omit<DataContextProps, 't' | 'c'>

type DataProviderProps = {
  children: ReactNode
}

export const DataContext = createContext({} as DataContextProps)

export function DataProvider({ children }: DataProviderProps) {
  const { asPath, locale, locales } = useRouter() as RouterProps
  const t = i18n[locale]
  const c = config

  return (
    <DataContext.Provider value={{ asPath, locale, locales, t, c }}>
      {children}
    </DataContext.Provider>
  )
}
