import { IconType } from 'react-icons/lib'
import styled from 'styled-components'

import Icons from '@/components/Icons'
import Link from '@/components/Link'
import profileData from '@/content/profile.json'

const Wrapper = styled.ul`
  display: inline-flex;
  gap: 1.25rem;
  margin: 0 auto;
  list-style: none;
`

export default function Social() {
  return (
    <Wrapper>
      {profileData.social.map(({ label, url }) => {
        const Icon = Icons[label] as IconType
        return (
          <li key={url}>
            <Link href={url} aria-label={label} rel="noopener noreferrer" target="_blank">
              <Icon size={22} />
            </Link>
          </li>
        )
      })}
    </Wrapper>
  )
}
