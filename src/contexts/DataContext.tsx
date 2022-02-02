import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { createContext } from 'react'

import { config } from '@/data/config'
import { i18n } from '@/data/i18n'

type Data = typeof i18n.en | typeof i18n.pt
type Config = typeof config

type DataContextProps = {
  asPath: string
  defaultLocale: string
  locale: 'en' | 'pt'
  locales: string[]
  t: Data
  c: Config
}

type RouterProps = Omit<DataContextProps, 't' | 'c'>

type DataProviderProps = {
  children: ReactNode
}

export const DataContext = createContext({} as DataContextProps)

export function DataProvider({ children }: DataProviderProps) {
  const { asPath, defaultLocale, locale, locales } = useRouter() as RouterProps
  const t = i18n[locale]
  const c = config

  return (
    <DataContext.Provider value={{ asPath, defaultLocale, locale, locales, t, c }}>
      {children}
    </DataContext.Provider>
  )
}
