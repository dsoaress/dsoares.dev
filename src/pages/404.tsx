import { Error } from '@/components/Error'
import { useData } from '@/hooks/useData'

export default function NotFoundPage() {
  const { d } = useData()

  return <Error errorMessage={d.errors.notFound} statusCode={404} />
}
