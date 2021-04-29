import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Header({ firstName, lastName }) {
  const { locale, locales, pathname } = useRouter()

  return (
    <header className="my-8">
      <div className="flex align-center justify-between">
        <h1 className="text-lg font-normal font-head uppercase">
          {firstName}
          <span className="text-green-600">{lastName}</span>
        </h1>
        <ul className="flex space-x-2">
          {locales.map((localeItem, i) => (
            <li className="uppercase" key={i}>
              <Link href={pathname} locale={localeItem}>
                <a
                  className={`text-sm font-bold ${
                    locale === localeItem ? 'text-green-600' : 'text-gray-100'
                  } hover:text-green-600 transition-colors`}
                >
                  [{localeItem}]
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
