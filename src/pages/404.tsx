import { Error } from '@/components/Error'
import { useData } from '@/hooks/useData'

export default function NotFoundPage() {
  const { t } = useData()

  return <Error errorMessage={t.errors.notFound} statusCode={404} />
}
