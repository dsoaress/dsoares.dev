import { useRouter } from 'next/router'

import Date from '@/components/Date'
import PostIcon from '@/components/PostIcon'
import Tags from '@/components/Tags'
import settings from '@/settings'

export default function PostAside({ date, icon, readingTime, tags }) {
  const { locale } = useRouter()
  const t = settings[locale]

  return (
    <aside className="sticky top-4 flex flex-row items-start pt-4 border-t border-gray-200 dark:border-gray-800 md:pl-4 md:border-l md:border-t-0 md:space-y-8 md:block">
      <PostIcon icon={icon} />
      <dl>
        <dt className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
          {t.blog_date}
        </dt>
        <dd>
          <Date date={date} />
        </dd>
      </dl>

      <dl>
        <dt className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
          {t.blog_reading_time}
        </dt>
        <dd className="text-sm text-neutral-600 dark:text-neutral-400">
          {readingTime} {t.blog_minute}
          {parseInt(readingTime) > 1 ? 's' : ''}
        </dd>
      </dl>

      <dl>
        <dt className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
          Tag{tags.length > 1 ? 's' : ''}
        </dt>
        <dd>
          <Tags tags={tags} />
        </dd>
      </dl>
    </aside>
  )
}
