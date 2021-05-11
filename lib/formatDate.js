import { parseISO, format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { useRouter } from 'next/router'

export function formatDate(rawDate) {
  const { locale } = useRouter()

  const date = {
    en: format(parseISO(rawDate), 'MMMM, yyyy'),
    pt: format(parseISO(rawDate), "MMMM 'de' yyyy", {
      locale: pt
    })
  }
  return date[locale]
}

export function formatFullDate(rawDate) {
  const { locale } = useRouter()

  const date = {
    en: format(parseISO(rawDate), 'MMMM dd, yyyy'),
    pt: format(parseISO(rawDate), "dd 'de' MMMM 'de' yyyy", {
      locale: pt
    })
  }
  return date[locale]
}
