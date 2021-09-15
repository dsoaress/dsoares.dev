import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext } from 'react'

import en from '@/data/en-us.json'
import pt from '@/data/pt-br.json'

const data = {
  'en-us': en,
  'pt-br': pt
}

type Data = typeof en

type DataContextProps = {
  asPath: string
  defaultLocale: string
  locale: keyof typeof data
  locales: string[]
  d: Data
}

type DataProviderProps = {
  children: ReactNode
}

type RouterProps = Omit<DataContextProps, 'd'>

const DataContext = createContext({} as DataContextProps)

export function DataProvider({ children }: DataProviderProps) {
  const { asPath, defaultLocale, locale, locales } = useRouter() as RouterProps
  const d: Data = data[locale]

  return (
    <DataContext.Provider value={{ asPath, defaultLocale, locale, locales, d }}>
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  return useContext(DataContext)
}
