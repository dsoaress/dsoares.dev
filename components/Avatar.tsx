import Image from 'next/image'

import avatar from '@/assets/avatar.jpg'
import profileData from '@/content/profile.json'

export default function Avatar() {
  return (
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
  )
}
