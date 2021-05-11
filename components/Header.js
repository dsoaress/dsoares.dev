import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

import LanguageSelector from '@/components/LanguageSelector'
import ThemeToggle from '@/components/ThemeToggle'
import i18n from '@/lib/i18n'
import settings from '@/settings'

export default function Header() {
  const { locale, pathname } = useRouter()
  const { nav } = i18n[locale]

  const { title } = settings
  const splittedName = title.split(' ')
  const firstName = splittedName[0]
  const lastName = splittedName[1]

  return (
    <>
      <div className="fixed w-full h-2 bg-primary-700 dark:bg-primary-500 z-20" />
      <header className="py-12 max-w-screen-lg px-8 mx-auto">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between items-center">
          <Link href="/">
            <a>
              <div className="text-xl font-mono-black">
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
                <Link href={url} key={url}>
                  <a
                    className={cn(
                      'text-sm md:text-base py-2 px-4 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors',
                      pathname === url && 'bg-neutral-200 dark:bg-neutral-800'
                    )}
                  >
                    <li>{label}</li>
                  </a>
                </Link>
              ))}
            </ul>
            <div className="flex items-center space-x-6">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
