import Image from 'next/image'
import { useRouter } from 'next/router'

import avatar from '@/assets/avatar.jpg'
import logo from '@/assets/logo.svg'
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
          alt={profileData.title}
          objectFit="cover"
          layout="fill"
          placeholder="blur"
          quality={100}
        />
      </div>
      <div className="flex items-center justify-center mx-auto text-neutral-300">
        <div className="p-10 space-y-8 text-center sm:p-20">
          <Image src={logo} alt={profileData.title} width={80} height={80} />
          <h1 className="text-5xl font-black">{profileData.title}</h1>
          <p className="font-light leading-7">{description}</p>
          <Social />
        </div>
      </div>
    </>
  )
}
