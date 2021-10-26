import { render } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { ReactElement, ReactNode } from 'react'

import { i18n } from '@/localesConfig'
import { Providers } from '@/providers'

type ReactProvidersProps = {
  children?: ReactNode
}

jest.mock('next/router', () => require('next-router-mock'))

const ReactProviders = ({ children }: ReactProvidersProps) => {
  return <Providers>{children}</Providers>
}

const customRender = (ui: ReactElement, options = {}) => {
  mockRouter.locales = i18n.locales
  mockRouter.locale = i18n.defaultLocale
  render(ui, { wrapper: ReactProviders, ...options })
}
export * from '@testing-library/react'

export { customRender as render }
