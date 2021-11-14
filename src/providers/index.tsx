import { ReactNode } from 'react'

import { globalStyles } from '@/styles/globals'

import { DataProvider } from './DataProvider'

type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  globalStyles()

  return <DataProvider>{children}</DataProvider>
}
