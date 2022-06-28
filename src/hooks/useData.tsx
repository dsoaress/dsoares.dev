import { useContext } from 'react'

import { DataContext } from '@/contexts'

export const useData = () => useContext(DataContext)
