import { HiOutlineDocumentDuplicate } from 'react-icons/hi'

import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { useTranslation } from '@/hooks/useTranslation'

import { Wrapper } from './styles'

export function Resume() {
  const { locale, t } = useTranslation()

  return (
    <Wrapper>
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
    </Wrapper>
  )
}
