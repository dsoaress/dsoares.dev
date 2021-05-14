import { formatFullDate } from '@/lib/formatDate'

export default function Date({ date }) {
  return (
    <span className="text-sm text-neutral-600 dark:text-neutral-400">
      {formatFullDate(date)}
    </span>
  )
}
