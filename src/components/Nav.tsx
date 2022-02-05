import { Link } from '@/components/Link'
import { useData } from '@/hooks/useData'

export function Nav() {
  const { asPath, locale, locales } = useData()

  return (
    <nav className="absolute inset-x-0 z-10 bg-gradient-to-b from-neutral-900 to-transparent px-16 pt-12 pb-32 text-sm">
      <ul className="flex list-none justify-center md:justify-end">
        {locales.map(localeItem => {
          return (
            <li className="mr-2 last:mr-0" key={localeItem}>
              <Link href={asPath} active={locale === localeItem} locale={localeItem}>
                [{localeItem}]
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
