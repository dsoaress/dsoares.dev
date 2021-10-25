import { ReactNode } from 'react'

import { GlobalStyles } from '@/styles/globals'

import { DataProvider } from './DataProvider'

type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <DataProvider>
      <GlobalStyles />
      {children}
    </DataProvider>
  )
}
