import { parseISO, format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { useRouter } from 'next/router'

function parseDate(date, form, ...rest) {
  return format(parseISO(date), form, ...rest)
}

export function formatDate(rawDate) {
  const { locale } = useRouter()

  const date = {
    en: parseDate(rawDate, 'MMMM, yyyy'),
    pt: parseDate(rawDate, "MMMM 'de' yyyy", {
      locale: pt
    })
  }

  return date[locale]
}

export function formatFullDate(rawDate) {
  const { locale } = useRouter()

  const date = {
    en: parseDate(rawDate, 'PP'),
    pt: parseDate(rawDate, 'PPP', {
      locale: pt
    })
  }

  return date[locale]
}
