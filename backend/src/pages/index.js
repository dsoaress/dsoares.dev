import { useSession } from 'next-auth/client'
import useSWR, { mutate } from 'swr'

import AddLink from '@/components/addLink'
import Header from '@/components/header'
import Login from '@/components/login'
import Settings from '@/components/settings'
import Spinner from '@/components/spinner'
import { fetcher } from '@/lib/fetcher'

export default function Home() {
  const [session, loading] = useSession()
  const { data } = useSWR('/api', fetcher)

  if (loading || !data) return <Spinner />
  if (!session) return <Login />

  const { footer, image, name, profile } = data
  const splittedName = name.split(' ')
  const firstName = splittedName[0]

  async function handleLink(e) {
    e.preventDefault()

    const label = e.currentTarget.label.value
    const url = e.currentTarget.url.value

    e.target.reset()

    mutate('/api/links', { ...data, data: { links: { label, url } } }, false)

    await fetch('/api/links', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ link: { label, url } })
    })

    mutate('/api/links')
  }

  async function handleSettings(e) {
    e.preventDefault()

    const body = {
      profile: {
        title: e.currentTarget.title.value,
        text: e.currentTarget.text.value
      },
      footer: e.currentTarget.footer.value
    }

    await fetch('/api/settings', {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }

  return (
    <>
      <Header firstName={firstName} image={image} />
      <AddLink handleLink={handleLink} />
      <Settings
        footer={footer}
        handleSettings={handleSettings}
        profile={profile}
      />
    </>
  )
}
