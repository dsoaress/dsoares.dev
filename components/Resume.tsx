import { useRouter } from 'next/router'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'
import styled from 'styled-components'

import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import i18nData from '@/content/i18n.json'

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
`

const ResumeIcon = styled(HiOutlineDocumentDuplicate)`
  margin-right: 0.5rem;
`

export function Resume() {
  const { locale } = useRouter()
  const resume = i18nData.resume[locale] as string

  return (
    <Wrapper>
      <Link
        href={`/resume-${locale}.pdf`}
        rel="noopener noreferrer"
        target="_blank"
        className={`umami--click--resume-${locale}`}
      >
        <Button>
          <ResumeIcon size={20} />
          {resume}
        </Button>
      </Link>
    </Wrapper>
  )
}
