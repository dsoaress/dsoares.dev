import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext } from 'react'

import { i18n } from '@/i18n'

type TranslationData = typeof i18n.en

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
