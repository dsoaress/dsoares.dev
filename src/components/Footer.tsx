import { Link } from '@/components/Link'
import { Social } from '@/components/Social'
import { Text } from '@/components/Text'
import { useData } from '@/hooks/useData'

export function Footer() {
  const { d } = useData()

  return (
    <footer className="flex flex-col justify-center my-12">
      <Social />
      <Text size="sm" className="mt-6 text-center" faded>
        {d.footer}
        <Link href="https://nextjs.org" rel="noopener noreferrer" target="_blank">
          Next.js
        </Link>
      </Text>
    </footer>
  )
}
