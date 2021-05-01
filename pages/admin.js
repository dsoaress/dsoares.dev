import { useSession } from 'next-auth/client'
import useSWR from 'swr'
import Head from 'next/head'

import AddLink from '@/components/admin/addLink'
import Header from '@/components/admin/header'
import Links from '@/components/admin/links'
import Login from '@/components/admin/login'
import Settings from '@/components/admin/settings'
import Spinner from '@/components/admin/spinner'
import { fetcher } from '@/lib/fetcher'

export default function Home() {
  const [session, loading] = useSession()
  const { data } = useSWR('/api', fetcher, { refreshInterval: 500 })

  if (loading || !data) return <Spinner />
  if (!session) return <Login />

  return (
    <>
      <Head>
        <title>{data.name} | Dashboard</title>
      </Head>
      <Header data={data} />
      <AddLink />
      <Links data={data} />
      <Settings data={data} />
    </>
  )
}
