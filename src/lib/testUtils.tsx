import { render } from '@testing-library/react'
import { ComponentType, ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/styles/theme'

type ProvidersProps = {
  children?: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender as render }
