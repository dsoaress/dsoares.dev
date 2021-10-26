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
      <Content
        variants={{
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2
            }
          }
        }}
        initial="hidden"
        animate="visible"
      >
        {d.social.map(({ label, url }) => {
          const Icon: IconType = Icons[label as keyof typeof Icons]
          return (
            <SocialItem
              key={url}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1
                }
              }}
            >
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
