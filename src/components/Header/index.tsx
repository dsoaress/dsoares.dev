import { Avatar } from '@/components/Avatar'
import { Heading } from '@/components/Heading'
import { Logo } from '@/components/Logo'
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
          <Logo width={80} height={80} />
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
