import { Error } from '@/components/Error'
import { useTranslation } from '@/hooks/useTranslation'

export default function NotFoundPage() {
  const { t } = useTranslation()

  return <Error errorMessage={t.errors.notFound} statusCode={404} />
}
