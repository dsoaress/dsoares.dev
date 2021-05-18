import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Error from '@/components/Error'
import sendNotification from '@/lib/sendNotification'
import translations from '@/translations'

export default function NotFoundPage() {
  const { asPath, locale } = useRouter()
  const t = translations[locale]

  useEffect(() => {
    sendNotification(`Erro 404: ${asPath}`)
  }, [])

  return <Error title={t.error404Title} message={t.error404Message} />
}
