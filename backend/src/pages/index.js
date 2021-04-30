import { useSession } from 'next-auth/client'
import useSWR from 'swr'

import AddLink from '@/components/addLink'
import Header from '@/components/header'
import Links from '@/components/links'
import Login from '@/components/login'
import Settings from '@/components/settings'
import Spinner from '@/components/spinner'
import { fetcher } from '@/lib/fetcher'

export default function Home() {
  const [session, loading] = useSession()
  const { data } = useSWR('/api', fetcher, { refreshInterval: 500 })

  if (loading || !data) return <Spinner />
  if (!session) return <Login />

  const { footer, image, links, name, profile } = data
  const splittedName = name.split(' ')
  const firstName = splittedName[0]

  return (
    <>
      <Header firstName={firstName} image={image} />
      <AddLink />
      <Links links={links} />
      <Settings footer={footer} profile={profile} />
    </>
  )
}
