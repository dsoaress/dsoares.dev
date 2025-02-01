import Link from 'next/link'
import type { JSX } from 'react'
import { SiDevdotto, SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'

import { cn } from '@/lib/cn'

import { Block } from './block'

const social = [
  {
    label: 'GitHub',
    url: 'https://github.com/dsoaress',
    icon: SiGithub,
    color: 'text-black',
    background: 'bg-zinc-50'
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dsoaress',
    icon: SiLinkedin,
    color: 'text-white',
    background: 'bg-blue-500'
  },
  {
    label: 'Dev',
    url: 'https://dev.to/dsoares',
    icon: SiDevdotto,
    color: 'text-white',
    background: 'bg-black'
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/dansoares',
    icon: SiInstagram,
    color: 'text-white',
    background: 'bg-gradient-to-r from-pink-500 to-yellow-500'
  }
]

export function Social(): JSX.Element[] {
  return social.map(({ label, url, icon: Icon, color, background }) => {
    return (
      <Block
        key={label}
        data-testid={`social-${label.toLowerCase()}`}
        className={cn(
          'col-span-6 md:col-span-3 relative transition-transform ease-in-out duration-300 hover:scale-105',
          background
        )}
      >
        <Link
          href={url}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className={cn('grid h-full place-content-center text-3xl absolute inset-0', color)}
        >
          <Icon />
        </Link>
      </Block>
    )
  })
}
