import Image from 'next/image'
import { useRouter } from 'next/router'

import logo from '@/assets/logo.svg'
import Avatar from '@/components/Avatar'
import Heading from '@/components/Heading'
import Social from '@/components/Social'
import Text from '@/components/Text'
import profileData from '@/content/profile.json'

export default function Profile() {
  const { locale } = useRouter()
  const description = profileData.description[locale] as string

  return (
    <>
      <Avatar />
      <div className="flex items-center justify-center mx-auto text-neutral-300">
        <div className="p-10 space-y-8 text-center sm:p-20">
          <Image src={logo} alt={profileData.title} width={80} height={80} />
          <Heading>{profileData.title}</Heading>
          <Text>{description}</Text>
          <Social />
        </div>
      </div>
    </>
  )
}
