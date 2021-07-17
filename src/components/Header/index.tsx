import Image from 'next/image'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'

import avatar from '@/assets/avatar.jpg'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Link } from '@/components/Link'
import { Logo } from '@/components/Logo'
import { Nav } from '@/components/Nav'
import { Social } from '@/components/Social'
import { Text } from '@/components/Text'
import profileData from '@/content/profile.json'
import { useTranslation } from '@/hooks/useTranslation'

import { Avatar, Content, Overlay, Resume, Wrapper } from './styles'

export function Header() {
  const { locale, t } = useTranslation()

  return (
    <>
      <Nav />
      <Wrapper>
        <Content>
          <Logo width={80} height={80} />
          <Heading>{profileData.title}</Heading>
          <Text>{t.description}</Text>

          <Resume>
            <Link
              href={`/resume-${locale}.pdf`}
              rel="noopener noreferrer"
              target="_blank"
              className={`umami--click--resume-${locale}`}
            >
              <Button>
                <HiOutlineDocumentDuplicate />
                {t.resume}
              </Button>
            </Link>
          </Resume>

          <Social />
        </Content>
      </Wrapper>
      <Avatar>
        <Image
          src={avatar}
          alt={profileData.title}
          objectFit="cover"
          objectPosition="top"
          layout="fill"
          placeholder="blur"
          quality={100}
          priority
        />
        <Overlay />
      </Avatar>
    </>
  )
}
