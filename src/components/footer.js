import { useRouter } from 'next/router'
import content from '@/content'

export default function Footer() {
  const router = useRouter()
  const { locale } = router
  const t = content[locale]
  return (
    <footer className="my-8 text-xs text-center">
      <p>{t.footer}</p>
      <p>
        {content.title} ©️ {new Date().getFullYear()}
      </p>
    </footer>
  )
}
