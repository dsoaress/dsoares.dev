import {
  AiFillGithub as GitHub,
  AiOutlineInstagram as Instagram,
  AiOutlineWhatsApp as WhatsApp
} from 'react-icons/ai'
import { BsEnvelope as Email } from 'react-icons/bs'
import { FaDev as Dev, FaLinkedinIn as LinkedIn } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

import { Link } from '@/components/Link'
import { useData } from '@/hooks/useData'

import { Content, SocialItem, Wrapper } from './styles'

const Icons = {
  Email,
  GitHub,
  LinkedIn,
  Dev,
  Instagram,
  WhatsApp
}

export function Social() {
  const { d } = useData()

  return (
    <Wrapper>
      <Content>
        {d.social.map(({ label, url }) => {
          const Icon: IconType = Icons[label as keyof typeof Icons]
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
      </Content>
    </Wrapper>
  )
}
