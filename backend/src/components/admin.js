import { useState } from 'react'
import useSWR, { mutate } from 'swr'
import { signOut } from 'next-auth/client'

import Spinner from '@/components/spinner'
import { fetcher } from '@/lib/fetcher'

export default function Tasks() {
  const [label, setLabel] = useState('')
  const [url, setUrl] = useState('')

  const { data } = useSWR('/api', fetcher, {
    refreshInterval: 500
  })

  if (!data) return <Spinner />

  async function handleSubmit(e) {
    e.preventDefault()
    mutate('/api', { ...data, data: { links: { label, url } } }, false)

    await fetch('/api', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ link: { label, url } })
    })

    mutate('/api')
    setLabel('')
    setUrl('')
  }

  return (
    <div>
      <div>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="text-black">
          <label>Label</label>
          <input
            type="text"
            value={label}
            onChange={e => setLabel(e.target.value)}
            required
          />
          <label>Url</label>
          <input
            type="text"
            value={url}
            onChange={e => setUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <div>
        {!data.links || data.links.length === 0 ? (
          <p>
            It looks like you don't have any more tasks... Would you like to add
            a new one?
          </p>
        ) : (
          data.links.map(link => (
            <div key={link._id}>
              <p>{link.label}</p>
              <p>{link.url}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
