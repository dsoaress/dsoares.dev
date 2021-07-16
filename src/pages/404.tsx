import axios from 'axios'
import { useEffect } from 'react'

import { Error } from '@/components/Error'
import { useTranslation } from '@/hooks/useTranslation'

export default function NotFoundPage() {
  const { asPath, t } = useTranslation()

  useEffect(() => {
    axios.post('/api/webhook', { content: `Error 404: ${asPath}` })
  }, [asPath])

  return <Error errorMessage={t.error.notFound} statusCode={404} />
}
