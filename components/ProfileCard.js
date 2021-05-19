import Image from 'next/image'

import Heading from '@/components/Heading'
import Markdown from '@/components/Markdown'

export default function ProfileCard({ image, body, title }) {
  return (
    <div className="flex flex-col items-center p-8 text-center rounded-md md:flex-row justify-items-center md:text-left bg-neutral-200 dark:bg-neutral-800 md:p-12">
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-12">
        <Image
          src={image}
          alt={title}
          width={180}
          height={180}
          quality={100}
          className="rounded-full"
          priority
        />
      </div>
      <div>
        <Heading as="h1">{title}</Heading>
        <Markdown content={body} className="prose-lg" />
      </div>
    </div>
  )
}
