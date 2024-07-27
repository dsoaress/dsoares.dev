import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'
import { SiDevdotto, SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'

import { cn } from '@/lib/utils'

import { Block, BlockProps } from './block'

const social = [
  {
    label: 'GitHub',
    url: 'https://github.com/dsoaress',
    icon: <SiGithub />,
    color: 'text-black',
    background: 'bg-neutral-50'
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dsoaress',
    icon: <SiLinkedin />,
    color: 'text-white',
    background: 'bg-blue-500'
  },
  {
    label: 'Dev',
    url: 'https://dev.to/dsoares',
    icon: <SiDevdotto />,
    color: 'text-white',
    background: 'bg-black'
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/dansoares',
    icon: <SiInstagram />,
    color: 'text-white',
    background: 'bg-gradient-to-r from-pink-500 to-yellow-500'
  }
]

function StyledBlock({ className, rotate, ...props }: BlockProps & { rotate: string }) {
  return (
    <Block
      whileHover={{ rotate, scale: 1.1 }}
      className={cn('col-span-6 md:col-span-3 relative', className)}
      {...props}
    />
  )
}

function StyledLink({
  className,
  ...props
}: LinkProps & { className: string; children: ReactNode }) {
  return (
    <Link
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('grid h-full place-content-center text-3xl absolute inset-0', className)}
    />
  )
}

export function Social() {
  return (
    <>
      {social.map(({ label, url, icon, color, background }, i) => {
        const rotate = i % 2 === 0 ? '-2.5deg' : '2.5deg'
        return (
          <StyledBlock key={label} rotate={rotate} className={background}>
            <StyledLink href={url} aria-label={label} className={color}>
              {icon}
            </StyledLink>
          </StyledBlock>
        )
      })}
    </>
  )
}
