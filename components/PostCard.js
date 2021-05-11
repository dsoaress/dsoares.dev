import Image from 'next/image'
import Link from 'next/link'

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
        <div className="grid gap-8 my-16 rounded-md lg:p-6 lg:grid-cols-[1fr,180px] transition-colors duration-300 lg:hover:bg-gray-100 lg:dark:hover:bg-gray-800">
          <div className="flex">
            <div className="flex items-center flex-shrink-0 mr-4">
              <Image
                src={imageToUrl(icon)}
                width={48}
                height={48}
                className="w-10"
              />
            </div>
            <div>
              <h3 className="text-3xl lg:text-5xl font-bold mb-2">{title}</h3>
              <p className="lg:text-lg">{description}</p>
            </div>
          </div>
          <div className="border-t lg:border-t-0 lg:border-l border-gray-300 lg:dark:border-gray-700 pt-4 lg:pt-0 lg:pl-4 lg:flex lg:flex-col lg:justify-center">
            {formatFullDate(date)}
            <div className="flex flex-wrap">
              {tags.map(({ tag }, i) => {
                const { name, color } = tag
                return (
                  <Link href={`/blog/tag/${name}`} key={i}>
                    <a>
                      <div
                        className={`bg-${color}-300 dark:bg-${color}-600 text-${color}-900 dark:text-${color}-100 hover:bg-${color}-400 dark:hover:bg-${color}-500 duration-300 font-semibold leading-4 mr-2 mt-2 p-1.5 rounded-md text-sm transition`}
                      >
                        {name}
                      </div>
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
