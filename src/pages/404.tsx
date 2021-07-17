import { Error } from '@/components/Error'
import { useTranslation } from '@/hooks/useTranslation'

export default function NotFoundPage() {
  const { t } = useTranslation()

  return <Error errorMessage={t.error.notFound} statusCode={404} />
}
