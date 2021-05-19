import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Error from '@/components/Error'
import sendNotification from '@/lib/sendNotification'
import translations from '@/translations'

export default function ServerErrorPage() {
  const { asPath, locale } = useRouter()
  const t = translations[locale]

  useEffect(() => {
    sendNotification(`Erro 500: ${asPath}`)
  }, [])

  return <Error title={t.error500Title} message={t.error500Message} />
}
