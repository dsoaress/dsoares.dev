import { Social, Text } from '@/components'
import { useData } from '@/hooks/useData'

export function Footer() {
  const { t } = useData()

  return (
    <footer className="my-12 flex flex-col justify-center" data-testid="footer">
      <Social />
      <Text size="sm" className="mt-6 text-center" faded>
        {t.footer}
      </Text>
    </footer>
  )
}
