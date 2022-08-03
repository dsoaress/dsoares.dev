import { Error } from '@/components'
import { useData } from '@/hooks/useData'

export function InternalServerError() {
  const { t } = useData()

  return <Error errorMessage={t.errors.internalError} statusCode={500} />
}
