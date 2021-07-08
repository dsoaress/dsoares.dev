import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import media from 'styled-media-query'

import logo from '@/assets/logo.svg'
import { Avatar } from '@/components/Avatar'
import { Heading } from '@/components/Heading'
import { Resume } from '@/components/Resume'
import { Social } from '@/components/Social'
import { Text } from '@/components/Text'
import profileData from '@/content/profile.json'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.text};
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  text-align: center;

  ${media.greaterThan('small')`
    padding: 5rem;
  `}
`

export function Profile() {
  const { locale } = useRouter()
  const description = profileData.description[locale] as string

  return (
    <>
      <Avatar />
      <Wrapper>
        <Container>
          <Image src={logo} alt={profileData.title} width={80} height={80} />
          <Heading>{profileData.title}</Heading>
          <Text>{description}</Text>
          <Resume />
          <Social />
        </Container>
      </Wrapper>
    </>
  )
}
