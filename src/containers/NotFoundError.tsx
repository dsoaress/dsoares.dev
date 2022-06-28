import { Error } from '@/components'
import { useData } from '@/hooks/useData'

export function NotFoundError() {
  const { t } = useData()

  return <Error errorMessage={t.errors.notFound} statusCode={404} />
}
