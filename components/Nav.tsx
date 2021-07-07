import { useRouter } from 'next/router'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'
import { VscProject } from 'react-icons/vsc'
import styled from 'styled-components'

import Button from '@/components/Button'
import Link from '@/components/Link'
import i18n from '@/i18n'
import { I18n } from '@/types/i18n'

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

const ProjectsIcon = styled(VscProject)`
  margin-right: 0.5rem;
`

const ResumeIcon = styled(HiOutlineDocumentDuplicate)`
  margin-right: 0.5rem;
`

export default function Resume() {
  const { locale } = useRouter()
  const { nav } = i18n[locale] as I18n

  return (
    <Wrapper>
      <Link href="/projects">
        <Button>
          <ProjectsIcon size={18} />
          {nav.projects}
        </Button>
      </Link>

      <Link href="/resume">
        <Button>
          <ResumeIcon size={20} />
          {nav.resume}
        </Button>
      </Link>
    </Wrapper>
  )
}
