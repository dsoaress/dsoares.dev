import { saveAs } from 'file-saver'
import Image from 'next/image'
import { BsArrowDownShort } from 'react-icons/bs'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { ScrollLink } from '@/components/Link'
import { Logo } from '@/components/Logo'
import { Social } from '@/components/Social'
import { Text } from '@/components/Text'
import { useData } from '@/hooks/useData'
import type { TransformadImg } from '@/types/transformadImg'

type HeaderProps = {
  avatar: TransformadImg
}

export function Header({ avatar }: HeaderProps) {
  const { locale, t, c } = useData()

  return (
    <>
      <header className="absolute flex h-screen w-full items-end justify-center pb-20 md:pb-8">
        <div className="z-10 grid gap-8 p-8 text-center">
          <Logo width={80} height={80} className="mx-auto hidden sm:block" />
          <Heading>{c.profile.title}</Heading>
          <Text>{t.description}</Text>

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

          <Social />
          <div className="mx-auto mt-2 md:mt-6">
            <ScrollLink to="projects">
              <BsArrowDownShort className="h-6 w-6 animate-bounce" />
            </ScrollLink>
          </div>
        </div>
      </header>

      <div className="relative h-screen">
        <Image
          alt={c.profile.title}
          objectFit="cover"
          objectPosition="top"
          layout="fill"
          placeholder="blur"
          quality={100}
          {...avatar}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
      </div>
    </>
  )
}
