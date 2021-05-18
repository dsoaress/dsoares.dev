import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

import LanguageSelector from '@/components/LanguageSelector'
import ThemeToggle from '@/components/ThemeToggle'
import seoData from '@/seo'
import translations from '@/translations'

export default function Header() {
  const { locale, pathname } = useRouter()
  const { nav } = translations[locale]
  const splittedName = seoData.title.split(' ')
  const firstName = splittedName[0]
  const lastName = splittedName[1]

  return (
    <>
      <div className="fixed z-20 w-full h-2 bg-primary-700 dark:bg-primary-500" />
      <header className="max-w-screen-lg px-8 pt-12 mx-auto mb-20">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <Link href="/">
            <a>
              <div className="text-xl font-black">
                {firstName}
                <span className="text-primary-700 dark:text-primary-500">
                  {lastName}
                </span>
              </div>
            </a>
          </Link>

          <div className="flex space-x-20 md:space-x-12">
            <ul className="flex space-x-4">
              {nav.map(({ label, url }) => (
                <li key={url}>
                  <Link href={url}>
                    <a
                      className={cn(
                        'text-sm md:text-base py-2 px-4 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors',
                        pathname === url && 'bg-neutral-200 dark:bg-neutral-800'
                      )}
                    >
                      {label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-6">
              <div className="w-5 h-5">
                <ThemeToggle />
              </div>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
