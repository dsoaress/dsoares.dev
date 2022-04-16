import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { createContext } from 'react'
import useSWR from 'swr'

import { config } from '@/data/config'
import { i18n } from '@/data/i18n'
import { fetcher } from '@/services/fetcher'
import type { CurrentTrack } from '@/types/currentTrack'
import type { I18n } from '@/types/i18n'

type DataContextProps = {
  asPath: string
  locale: 'en' | 'es' | 'pt'
  locales: string[]
  currentTrack?: CurrentTrack
  t: I18n
  c: typeof config
}

type RouterProps = Omit<DataContextProps, 'currentTrack' | 't' | 'c'>

type DataProviderProps = {
  children: ReactNode
}

export const DataContext = createContext({} as DataContextProps)

export function DataProvider({ children }: DataProviderProps) {
  const { asPath, locale, locales } = useRouter() as RouterProps
  const t = i18n[locale]
  const c = config
  const { data: currentTrack } = useSWR<CurrentTrack>('/api/get-current-track', fetcher, {
    refreshInterval: 30000
  })

  return (
    <DataContext.Provider value={{ asPath, locale, locales, currentTrack, t, c }}>
      {children}
    </DataContext.Provider>
  )
}
