import { useContext } from 'react'

import { DataContext } from '@/contexts/DataContext'

export function useData() {
  return useContext(DataContext)
}
