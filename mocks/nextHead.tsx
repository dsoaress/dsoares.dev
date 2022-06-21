import type { ReactNode } from 'react'

export default jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: ReactNode }) => {
      return <>{children}</>
    }
  }
})
