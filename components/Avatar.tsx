import Image from 'next/image'
import styled from 'styled-components'
import media from 'styled-media-query'

import avatar from '@/assets/avatar.jpg'
import profileData from '@/content/profile.json'

const Wrapper = styled.div`
  position: relative;
  flex-grow: 1;

  ${media.greaterThan('medium')`
    width: 100%;
    height: 100vh;
  `}
`

export default function Avatar() {
  return (
    <Wrapper>
      <Image
        src={avatar}
        alt={profileData.title}
        objectFit="cover"
        layout="fill"
        placeholder="blur"
        quality={100}
      />
    </Wrapper>
  )
}
