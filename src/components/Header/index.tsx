import Image from 'next/image'

import logo from '@/assets/logo.svg'
import { Avatar } from '@/components/Avatar'
import { Heading } from '@/components/Heading'
import { Nav } from '@/components/Nav'
import { Resume } from '@/components/Resume'
import { Social } from '@/components/Social'
import { Text } from '@/components/Text'
import profileData from '@/content/profile.json'
import { useTranslation } from '@/hooks/useTranslation'

import { Content, Wrapper } from './styles'

export function Header() {
  const { t } = useTranslation()

  return (
    <>
      <Nav />
      <Wrapper>
        <Content>
          <Image src={logo} alt={profileData.title} width={80} height={80} />
          <Heading>{profileData.title}</Heading>
          <Text>{t.description}</Text>
          <Resume />
          <Social />
        </Content>
      </Wrapper>
      <Avatar />
    </>
  )
}
