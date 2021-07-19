import { render } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react'

type ProvidersProps = {
  children?: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return <>{children}</>
}

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender as render }
