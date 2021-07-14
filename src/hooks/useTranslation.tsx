import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext } from 'react'

import { i18n } from '@/i18n'

type TranslationData = {
  description: string
  nav: Array<{ label: string; url: string }>
  resume: string
  projects: {
    title: string
  }
  posts: {
    readingTime: string
    readMore: string
  }
  footer: string
}

type TranslationContextData = {
  defaultLocale: string
  locale: string
  t: TranslationData
}

type TranslationProviderProps = {
  children: ReactNode
}

const TranslationContext = createContext({} as TranslationContextData)

export function TranslationProvider({ children }: TranslationProviderProps) {
  const { defaultLocale, locale } = useRouter()
  const t = i18n[locale] as TranslationData

  return (
    <TranslationContext.Provider value={{ defaultLocale, locale, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  return context
}