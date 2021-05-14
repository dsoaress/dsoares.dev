import { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import Error from '@/components/Error'
import settings from '@/settings'

export default function ServerErrorPage() {
  const { asPath, locale } = useRouter()
  const t = settings[locale]

  useEffect(() => {
    axios.post('/api/webhook', {
      code: 404,
      path: asPath
    })
  }, [])

  return <Error title={t.error_500_title} message={t.error_500_message} />
}
