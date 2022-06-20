import { Error } from '@/components/Error'
import { useData } from '@/hooks/useData'

export function NotFoundError() {
  const { t } = useData()

  return <Error errorMessage={t.errors.notFound} statusCode={404} />
}
