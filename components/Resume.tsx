import { useRouter } from 'next/router'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'
import styled from 'styled-components'

import Button from '@/components/Button'
import Link from '@/components/Link'
import profileData from '@/content/profile.json'

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
`

const ResumeIcon = styled(HiOutlineDocumentDuplicate)`
  margin-right: 0.5rem;
`

export default function Resume() {
  const { locale } = useRouter()
  const resume = profileData.resume[locale] as string

  return (
    <Wrapper>
      <Link href={`/resume-${locale}.pdf`}>
        <Button>
          <ResumeIcon size={20} />
          {resume}
        </Button>
      </Link>
    </Wrapper>
  )
}
