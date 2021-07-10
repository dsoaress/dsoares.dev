import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import logo from '@/assets/logo.svg'
import { Avatar } from '@/components/Avatar'
import { Heading } from '@/components/Heading'
import { Resume } from '@/components/Resume'
import { Social } from '@/components/Social'
import { Text } from '@/components/Text'
import profileData from '@/content/profile.json'

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 96px;
  width: 100%;
  height: 100vh;
`

const Content = styled.div`
  display: grid;
  gap: 32px;
  max-width: 640px;
  padding: 0 32px;
  text-align: center;
  z-index: 10;
`

export function Header() {
  const { locale } = useRouter()
  const description = profileData.description[locale] as string

  return (
    <>
      <Wrapper>
        <Content>
          <Image src={logo} alt={profileData.title} width={80} height={80} />
          <Heading>{profileData.title}</Heading>
          <Text>{description}</Text>
          <Resume />
          <Social />
        </Content>
      </Wrapper>
      <Avatar />
    </>
  )
}
