import Image from 'next/image'

import Heading from '@/components/Heading'
import Markdown from '@/components/Markdown'
import { imageLoader } from '@/lib/imageLoader'

export default function ProfileCard({ image, text, title }) {
  return (
    <div className="flex flex-col md:flex-row justify-items-center items-center text-center md:text-left bg-neutral-200 dark:bg-neutral-800 p-8 md:p-12 rounded-md">
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-12">
        <Image
          src={imageLoader(image)}
          alt={title}
          width={180}
          height={180}
          quality={100}
          className="rounded-full"
        />
      </div>
      <div>
        <Heading as="h1">{title}</Heading>
        <Markdown content={text} className="text-lg" />
      </div>
    </div>
  )
}
