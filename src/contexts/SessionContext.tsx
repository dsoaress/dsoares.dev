import type { Session } from '@supabase/supabase-js'
import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'react'

import { supabase } from '@/services/supabase'

type SessionContextProps = {
  session: Session | null
}

export const SessionContext = createContext({} as SessionContextProps)

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return <SessionContext.Provider value={{ session }}>{children}</SessionContext.Provider>
}
