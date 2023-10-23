'use client'

import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiHome, BiInfoCircle, BiLogoGithub, BiLogoLinkedin, BiReceipt } from 'react-icons/bi'

export const links = [
  {
    href: '/',
    label: 'Home',
    icon: BiHome,
    external: false
  },
  {
    href: '/about',
    label: 'About',
    icon: BiInfoCircle,
    external: false
  },
  {
    href: '/posts',
    label: 'Posts',
    icon: BiReceipt,
    external: false
  },
  {
    href: 'https://linkedin.com/in/dsoaress',
    label: 'LinkedIn',
    icon: BiLogoLinkedin,
    external: true
  },
  {
    href: 'https://github.com/dsoaress',
    label: 'GitHub',
    icon: BiLogoGithub,
    external: true
  }
]

export function Nav() {
  const pathname = usePathname()
  return (
    <nav className="w-full">
      <ul className="space-y-4">
        {links.map(({ href, label, icon: Icon, external }) => (
          <li key={href} className="py-2">
            <Link
              href={href}
              className={cn(
                'w-full h-6 flex items-center justify-center relative text-neutral-400 hover:text-neutral-500 transition-colors duration-300',
                { 'text-primary-500 hover:text-primary-600': pathname === href }
              )}
              target={external ? '_blank' : '_self'}
              rel={external ? 'noopener noreferrer' : undefined}
            >
              <Icon className="w-6 h-6" />
              <span className="sr-only">{label}</span>
              <div
                className={cn(
                  'bg-opacity-0 absolute w-0.5 right-0 top-0 bottom-0 bg-primary-500 transition-colors duration-500',
                  {
                    'bg-opacity-100': pathname === href
                  }
                )}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
