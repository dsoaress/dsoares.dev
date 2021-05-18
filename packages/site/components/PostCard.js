import Link from 'next/link'
import cn from 'classnames'

import Heading from '@/components/Heading'
import PostIcon from '@/components/PostIcon'
import Tags from '@/components/Tags'
import { formatFullDate } from '@/lib/formatDate'

export default function PostCard({
  date,
  description,
  icon,
  slug,
  tags,
  title
}) {
  return (
    <article className="relative transition-colors duration-300 rounded-md cursor-pointer lg:hover:bg-neutral-200 lg:dark:hover:bg-neutral-800">
      <Link href={`/blog/${slug}`}>
        <a aria-label={title} className="absolute inset-0"></a>
      </Link>
      <div className="gap-4 lg:gap-8 grid lg:grid-cols-[1fr,180px] lg:p-6">
        <div className="flex items-center lg:space-x-8">
          <PostIcon icon={icon} className="hidden lg:block" />
          <div>
            <Heading>{title}</Heading>
            <p className="lg:text-lg">{description}</p>
          </div>
        </div>
        <div className="flex items-center pt-4 space-x-6 border-t border-neutral-300 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 lg:space-x-0 dark:border-neutral-700">
          <PostIcon icon={icon} className="h-12 lg:hidden" />
          <div className="lg:space-y-2">
            <span
              className={cn(
                'text-sm',
                'text-neutral-600',
                'dark:text-neutral-400'
              )}
            >
              {formatFullDate(date)}
            </span>
            <Tags tags={tags} />
          </div>
        </div>
      </div>
    </article>
  )
}
