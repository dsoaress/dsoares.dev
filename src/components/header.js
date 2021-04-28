import { useRouter } from 'next/router'
import Link from 'next/link'

import content from '@/content'

export default function Header() {
  const router = useRouter()
  const { locale, locales, pathname } = router
  const title = content.title.split(/(\s+)/).filter(e => e.trim().length > 0)

  return (
    <header className="my-8">
      <div className="flex align-center justify-between">
        <h1 className="text-lg font-normal font-head uppercase">
          {title[0]}
          <span className="text-green-600">{title[1]}</span>
        </h1>
        <ul>
          <div className="flex space-x-2">
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
          </div>
        </ul>
      </div>
    </header>
  )
}
