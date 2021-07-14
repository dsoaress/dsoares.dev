import { IconType } from 'react-icons/lib'

import { Icons } from '@/components/Icons'
import { Link } from '@/components/Link'
import profileData from '@/content/profile.json'

import { SocialItem, Wrapper } from './styles'

export function Social() {
  return (
    <Wrapper>
      {profileData.social.map(({ label, url }) => {
        const Icon = Icons[label] as IconType
        return (
          <SocialItem key={url}>
            <Link
              href={url}
              aria-label={label}
              rel="noopener noreferrer"
              target="_blank"
              className={`umami--click--${label}`}
            >
              <Icon size={22} />
            </Link>
          </SocialItem>
        )
      })}
    </Wrapper>
  )
}
