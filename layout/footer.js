import { useRouter } from 'next/router'
import { Text } from '@chakra-ui/react'
import Section from '@/components/section'
import content from '@/content'

export default function Footer() {
  const router = useRouter()
  const { locale } = router
  const t = content[locale]
  return (
    <Section as="footer" my={8} fontSize="xs" textAlign="center">
      <Text>{t.footer}</Text>
      <Text>
        {content.title} ©️ {new Date().getFullYear()}
      </Text>
    </Section>
  )
}
