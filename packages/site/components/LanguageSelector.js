import { Popover, Transition } from '@headlessui/react'
import { BiGlobe } from 'react-icons/bi'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

import translations from '@/translations'

export default function LanguageSelector() {
  const { asPath, locale, locales } = useRouter()

  return (
    <Popover className="relative h-5">
      <Popover.Button
        className="focus:outline-none"
        aria-label="Language selector"
      >
        <BiGlobe size={20} />
      </Popover.Button>
      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 z-10 w-48 mt-4">
          <div className="overflow-hidden text-right border rounded-md shadow-lg border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
            <ul>
              {locales.map((localeItem, i) => {
                const item = translations[localeItem].languageName
                return (
                  <li key={i}>
                    <Link href={asPath} locale={localeItem}>
                      <a
                        className={cn(
                          'block p-3 transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-700 text-sm',
                          locale === localeItem &&
                            'bg-neutral-200 dark:bg-neutral-800'
                        )}
                      >
                        {item}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
