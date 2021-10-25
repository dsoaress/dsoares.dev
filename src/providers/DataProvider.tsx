import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { DataContext } from '@/contexts/DataContext'
import { data } from '@/lib/data'
import { RouterProps } from '@/types/data'

type DataProviderProps = {
  children: ReactNode
}

export function DataProvider({ children }: DataProviderProps) {
  const { asPath, defaultLocale, locale, locales } = useRouter() as RouterProps
  const d = data[locale]

  return (
    <DataContext.Provider value={{ asPath, defaultLocale, locale, locales, d }}>
      {children}
    </DataContext.Provider>
  )
}
