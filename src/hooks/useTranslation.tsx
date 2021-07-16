import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext } from 'react'

import en from '@/i18n/en.json'
import pt from '@/i18n/pt.json'

const i18n = {
  en,
  pt
}

type TranslationData = typeof en

type TranslationContextData = {
  asPath: string
  defaultLocale: string
  locale: keyof typeof i18n
  locales: string[]
  t: TranslationData
}

type TranslationProviderProps = {
  children: ReactNode
}

type RouterProps = Omit<TranslationContextData, 't'>

const TranslationContext = createContext({} as TranslationContextData)

export function TranslationProvider({ children }: TranslationProviderProps) {
  const { asPath, defaultLocale, locale, locales } = useRouter() as RouterProps
  const t: TranslationData = i18n[locale]

  return (
    <TranslationContext.Provider value={{ asPath, defaultLocale, locale, locales, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  return context
}
