import { i18n } from '@/data'

export type I18n = {
  listeningNow: string
  resume: {
    title: string
    file: string
  }
  description: string
  projects: {
    title: string
    description: string
  }
  errors: {
    notFound: string
    internalError: string
    buttonLabel: string
  }
  footer: string
}

export type Locales = keyof typeof i18n
