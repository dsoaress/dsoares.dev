import { format, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'

export function formatDate(rawDate: string) {
  const date = {
    en: format(parseISO(rawDate), 'MMM dd, yyyy'),
    pt: format(parseISO(rawDate), "d 'de' MMMM 'de' yyyy", {
      locale: pt
    })
  }

  return date
}
