import { saveAs } from 'file-saver'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BsArrowDownShort } from 'react-icons/bs'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'

import { Button, Heading, ListeningNow, Logo, ScrollLink, Skills, Text } from '@/components'
import { useData } from '@/hooks/useData'

type HeaderProps = {
  avatarBlurDataURL: string
}

export function Header({ avatarBlurDataURL }: HeaderProps) {
  const { locale } = useRouter()
  const { t, c } = useData()

  return (
    <>
      <header className="absolute flex h-screen w-full items-end justify-center pb-20 md:pb-8">
        <div className="z-10 grid gap-8 p-8 text-center">
          <Logo width={80} height={80} className="mx-auto hidden sm:block" />
          <Heading>{c.profile.title}</Heading>
          <Text>{t.description}</Text>

          <ListeningNow />

          {c.showResume && (
            <div className="flex justify-center">
              <Button
                className={`umami--click--resume-${locale}`}
                icon={HiOutlineDocumentDuplicate}
                onClick={() => saveAs(t.resume.file, `${c.profile.title}-resume-${locale}.pdf`)}
              >
                {t.resume.title}
              </Button>
            </div>
          )}

          <Skills />

          <div className="mx-auto mt-2 md:mt-6">
            <ScrollLink to="projects">
              <BsArrowDownShort className="h-6 w-6 animate-bounce" />
            </ScrollLink>
          </div>
        </div>
      </header>

      <div className="relative h-screen">
        <Image
          src={c.profile.avatar}
          alt={c.profile.title}
          objectFit="cover"
          objectPosition="top"
          layout="fill"
          placeholder="blur"
          quality={100}
          blurDataURL={avatarBlurDataURL}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 to-transparent dark:from-neutral-900" />
      </div>
    </>
  )
}
