import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { createContext } from 'react'

import { data } from '@/lib/data'
import { DataContextProps } from '@/types/data'
import { RouterProps } from '@/types/data'

type DataProviderProps = {
  children: ReactNode
}

export const DataContext = createContext({} as DataContextProps)

export function DataProvider({ children }: DataProviderProps) {
  const { asPath, defaultLocale, locale, locales } = useRouter() as RouterProps
  const d = data[locale]

  return (
    <DataContext.Provider value={{ asPath, defaultLocale, locale, locales, d }}>
      {children}
    </DataContext.Provider>
  )
}
