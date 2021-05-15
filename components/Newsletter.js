import { useState } from 'react'
import { useRouter } from 'next/router'

import Alert from '@/components/Alert'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Input from '@/components/Input'
import sendNotification from '@/lib/sendNotification'
import translations from '@/translations'

export default function Newsletter() {
  const { locale } = useRouter()
  const t = translations[locale]
  const [message, setMessage] = useState({})

  async function handleSubmit(e) {
    e.preventDefault()
    setMessage({})

    const name = e.currentTarget.name.value
    const email = e.currentTarget.email.value
    const body = { name, email, locale }

    const rawResponse = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const response = await rawResponse.json()

    if (response.status === 200) {
      setMessage({
        variant: 'success',
        text: t.newsletter_success
      })
      sendNotification(`Novo usuário cadastrado: ${name} <${email}>`)
    } else {
      setMessage({
        variant: 'error',
        text: t.newsletter_error
      })
    }
  }

  return (
    <div className="max-w-screen-sm py-12 mx-auto text-center">
      <Heading as="h2" noMargin>
        {t.newsletter_title}
      </Heading>
      <Heading as="h2" highlight>
        {t.newsletter_subtitle}
      </Heading>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-12 space-y-4 md:flex-row md:space-y-0 md:space-x-4"
      >
        <Input id="name" label={t.newsletter_name} type="text" required />
        <Input id="email" label={t.newsletter_email} type="email" required />

        <div className="flex-shrink-0">
          <Button>{t.newsletter_button}</Button>
        </div>
      </form>
      <Alert message={message} />
    </div>
  )
}
