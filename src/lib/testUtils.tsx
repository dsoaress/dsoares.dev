import { render } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { ReactElement, ReactNode } from 'react'

import { DataProvider } from '@/hooks/useData'

import { i18n } from '../../locales.config'

type ProvidersProps = {
  children?: ReactNode
}

jest.mock('next/router', () => require('next-router-mock'))

const Providers = ({ children }: ProvidersProps) => {
  return <DataProvider>{children}</DataProvider>
}

const customRender = (ui: ReactElement, options = {}) => {
  mockRouter.locales = i18n.locales
  mockRouter.locale = i18n.defaultLocale
  render(ui, { wrapper: Providers, ...options })
}
export * from '@testing-library/react'

export { customRender as render }
