import { useRouter } from 'next/router'

import { Link, ThemeToggle } from '@/components'

export function Nav() {
  const { asPath, locale, locales } = useRouter()

  return (
    <nav className="absolute inset-x-0 z-10 bg-gradient-to-b from-neutral-900 to-transparent px-16 pt-12 pb-32 text-sm">
      <ul className="flex list-none justify-center md:justify-end">
        {locales?.map(localeItem => {
          return (
            <li className="mr-2 last:mr-0" key={localeItem}>
              <Link
                href={asPath}
                active={locale === localeItem}
                className="text-neutral-50"
                locale={localeItem}
              >
                [{localeItem}]
              </Link>
            </li>
          )
        })}
        <ThemeToggle />
      </ul>
    </nav>
  )
}
