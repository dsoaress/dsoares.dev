import { Error } from '@/components/Error'
import { useData } from '@/hooks/useData'

export function InternalServerError() {
  const { t } = useData()

  return <Error errorMessage={t.errors.internalError} statusCode={500} />
}
