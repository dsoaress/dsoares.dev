import Link from 'next/link'

import Date from '@/components/Date'
import Heading from '@/components/Heading'
import PostIcon from '@/components/PostIcon'
import Tags from '@/components/Tags'

export default function PostCard({
  date,
  description,
  icon,
  slug,
  tags,
  title
}) {
  return (
    <article className="relative lg:hover:bg-neutral-200 lg:dark:hover:bg-neutral-800 rounded-md transition-colors duration-300 cursor-pointer">
      <Link href={`/blog/${slug}`}>
        <a aria-label={title} className="absolute inset-0"></a>
      </Link>
      <div className="gap-8 grid lg:grid-cols-[1fr,180px] lg:p-6">
        <div className="flex items-center lg:space-x-8">
          <PostIcon icon={icon} className="hidden lg:block" />
          <div>
            <Heading>{title}</Heading>
            <p className="lg:text-lg">{description}</p>
          </div>
        </div>
        <div className="border-neutral-300 border-t flex items-center pt-6 space-x-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 lg:space-x-0 dark:border-neutral-700">
          <PostIcon icon={icon} className="lg:hidden h-12" />
          <div className="lg:space-y-2">
            <Date date={date} />
            <Tags tags={tags} />
          </div>
        </div>
      </div>
    </article>
  )
}
