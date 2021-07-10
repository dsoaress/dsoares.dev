import Image from 'next/image'
import styled from 'styled-components'

import avatar from '@/assets/avatar.jpg'
import profileData from '@/content/profile.json'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    0deg,
    ${({ theme }) => theme.colors.background} 10%,
    rgba(0, 0, 0, 0.1) 100%
  );
`

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
