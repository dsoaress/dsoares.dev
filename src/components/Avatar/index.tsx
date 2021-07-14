import Image from 'next/image'

import avatar from '@/assets/avatar.jpg'
import profileData from '@/content/profile.json'

import { Overlay, Wrapper } from './styles'

export function Avatar() {
  return (
    <Wrapper>
      <Image
        src={avatar}
        alt={profileData.title}
        objectFit="cover"
        objectPosition="top"
        layout="fill"
        placeholder="blur"
        quality={100}
      />
      <Overlay />
    </Wrapper>
  )
}
