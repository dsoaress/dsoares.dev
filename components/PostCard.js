import Image from 'next/image'
import Link from 'next/link'

import Heading from '@/components/Heading'
import Tag from '@/components/Tag'
import { formatFullDate } from '@/lib/formatDate'
import { imageToUrl } from '@/lib/imageToUrl'

export default function PostCard({
  date,
  description,
  icon,
  slug,
  tags,
  title
}) {
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <div className="grid gap-8 my-8 rounded-md lg:p-6 lg:grid-cols-[1fr,180px] transition-colors duration-300 lg:hover:bg-neutral-100 lg:dark:hover:bg-neutral-800">
          <div className="flex">
            <div className="flex items-center flex-shrink-0 mr-8">
              <Image
                src={imageToUrl(icon)}
                width={48}
                height={48}
                className="w-10"
              />
            </div>
            <div>
              <Heading as="h2">{title}</Heading>
              <p className="lg:text-lg">{description}</p>
            </div>
          </div>
          <div className="border-t lg:border-t-0 lg:border-l border-neutral-300 dark:border-neutral-700 pt-4 lg:pt-0 lg:pl-4 lg:flex lg:flex-col lg:justify-center">
            {formatFullDate(date)}
            <div className="flex flex-wrap">
              {tags.map(({ tag }, i) => {
                const { name, color } = tag
                return (
                  <Link href={`/blog/tag/${name}`} key={i}>
                    <a>
                      <Tag color={color} name={name} size="small" />
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
