import Link from 'next/link'

import Icons from '@/components/Icons'
import socialData from '@/content/social.json'

export default function Social() {
  return (
    <ul className="inline-flex mx-auto space-x-4">
      {socialData.map(({ label, url }) => {
        const Icon = Icons[label]

        return (
          <li key={url}>
            <Link href={url}>
              <a
                className="transition-colors duration-300 text-primary-500 hover:text-neutral-300"
                aria-label={label}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon size={22} />
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
