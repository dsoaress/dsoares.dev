import Image from 'next/image'
import { useRouter } from 'next/router'

import avatar from '@/assets/avatar.jpg'
import Social from '@/components/Social'
import profileData from '@/content/profile.json'

export default function Profile() {
  const { locale } = useRouter()
  const description = profileData.description[locale] as string

  return (
    <>
      <div className="relative flex-grow md:h-screen md:w-full">
        <Image
          src={avatar}
          alt="Daniel Soares"
          objectFit="cover"
          layout="fill"
          placeholder="blur"
          quality={100}
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="p-10 space-y-8 text-center text-gray-600 sm:p-20">
          <h1 className="text-5xl font-extrabold">{profileData.title}</h1>
          <p className="font-light">{description}</p>
          <Social />
        </div>
      </div>
    </>
  )
}
