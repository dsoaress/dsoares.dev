import { Social } from '@/components/Social'
import { Text } from '@/components/Text'
import { useData } from '@/hooks/useData'

export function Footer() {
  const { c, t } = useData()

  return c.parameters.showFooter ? (
    <footer className="my-12 flex flex-col justify-center">
      <Social />
      <Text size="sm" className="mt-6 text-center" faded>
        {t.footer}
      </Text>
    </footer>
  ) : null
}
