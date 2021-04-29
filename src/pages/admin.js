import { useSession } from 'next-auth/client'

import Admin from '@/components/admin'
import Login from '@/components/login'
import Spinner from '@/components/spinner'

export default function AdminPage() {
  const [session, loading] = useSession()

  if (loading) return <Spinner />

  if (!session) return <Login />
  else return <Admin />
}
