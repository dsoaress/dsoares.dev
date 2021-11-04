import { saveAs } from 'file-saver'
import Image from 'next/image'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Logo } from '@/components/Logo'
import { Social } from '@/components/Social'
import { Text } from '@/components/Text'
import { useData } from '@/hooks/useData'

import { Avatar, Content, Overlay, Resume, Wrapper } from './styles'

export function Header() {
  const { locale, d } = useData()

  return (
    <>
      <Wrapper>
        <Content>
          <Logo width={80} height={80} />
          <Heading>{d.profile.title}</Heading>
          <Text>{d.profile.description}</Text>

          {d.resume.showResume && (
            <Resume>
              <Button
                className={`umami--click--resume-${locale}`}
                onClick={() => saveAs(d.resume.file, `${d.profile.title}-resume.pdf`)}
              >
                <HiOutlineDocumentDuplicate />
                {d.resume.title}
              </Button>
            </Resume>
          )}

          <Social />
        </Content>
      </Wrapper>

      <Avatar>
        <Image
          src={d.profile.avatar.image}
          blurDataURL={d.profile.avatar.placeholder}
          placeholder="blur"
          alt={d.profile.title}
          objectFit="cover"
          objectPosition="top"
          layout="fill"
          quality={100}
        />
        <Overlay />
      </Avatar>
    </>
  )
}
