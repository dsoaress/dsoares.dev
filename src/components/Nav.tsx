import { Link, ScrollLink } from '@/components/Link'
import { useData } from '@/hooks/useData'

export function Nav() {
  const { asPath, locale, locales, c, t } = useData()
  const isHome = asPath === '/'

  return (
    <nav className="absolute inset-x-0 z-10 px-16 pt-12 pb-32 text-sm bg-gradient-to-b from-neutral-900 to-transparent">
      <ul className="flex justify-center list-none md:justify-end">
        {c.parameters.showNav &&
          t.nav.map(navItem => {
            if (isHome && navItem.url === '/') return

            return (
              <li className="mr-6" key={navItem.url}>
                {isHome ? (
                  <ScrollLink to={navItem.url}>{navItem.label}</ScrollLink>
                ) : (
                  <Link href={navItem.url === '/' ? navItem.url : `/#${navItem.url}`}>
                    {navItem.label}
                  </Link>
                )}
              </li>
            )
          })}

        <li className="mr-6">
          <ul className="flex justify-center list-none">
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
        </li>
      </ul>
    </nav>
  )
}
