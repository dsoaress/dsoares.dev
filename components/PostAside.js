import { useRouter } from 'next/router'

import PostIcon from '@/components/PostIcon'
import Tags from '@/components/Tags'
import { formatDate } from '@/lib/formatDate'
import translations from '@/translations'

export default function PostAside({ date, icon, readingTime, tags }) {
  const { locale } = useRouter()
  const t = translations[locale]

  return (
    <aside className="sticky flex flex-col py-6 space-y-4 border-t border-gray-200 top-4 sm:flex-row sm:space-y-0 sm:space-x-6 md:space-x-0 md:space-y-8 dark:border-gray-800 md:pl-4 md:border-l md:border-t-0 md:block">
      <div className="flex space-x-4 sm:space-x-6 md:space-x-0 md:flex-col md:space-y-8">
        <PostIcon icon={icon} />
        <dl>
          <dt className="text-sm font-bold text-neutral-700 dark:text-neutral-300">
            {t.blog_date}
          </dt>
          <dd className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(date)}
          </dd>
        </dl>
        <dl>
          <dt className="text-sm font-bold text-neutral-700 dark:text-neutral-300">
            {t.blog_reading_time}
          </dt>
          <dd className="text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
            {readingTime} {t.blog_minute}
            {parseInt(readingTime) > 1 ? 's' : ''}
          </dd>
        </dl>
      </div>
      <dl>
        <dt className="text-sm font-bold text-neutral-700 dark:text-neutral-300">
          Tag{tags.length > 1 ? 's' : ''}
        </dt>
        <dd>
          <Tags tags={tags} />
        </dd>
      </dl>
    </aside>
  )
}
