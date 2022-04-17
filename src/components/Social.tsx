import { AiFillGithub, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsEnvelope } from 'react-icons/bs'
import { FaDev, FaLinkedinIn } from 'react-icons/fa'

import { Link } from '@/components/Link'
import { useData } from '@/hooks/useData'
import { styled } from '@/styles/stitches'

export const Icons = {
  Email: BsEnvelope,
  GitHub: AiFillGithub,
  LinkedIn: FaLinkedinIn,
  Dev: FaDev,
  Instagram: AiOutlineInstagram,
  WhatsApp: AiOutlineWhatsApp
}

const Wrapper = styled('div', {
  mx: 'auto'
})

const Content = styled('ul', {
  display: 'inline-flex',
  listStyle: 'none'
})

const Item = styled('li', {
  mr: 24,
  transition: '$transform',

  '&:last-child': {
    mr: 0
  },

  '&:hover': {
    transform: 'scale(1.1)'
  },

  '&:active': {
    transform: 'scale(0.95)'
  }
})

export function Social() {
  const { c } = useData()

  return (
    <Wrapper>
      <Content>
        {c.social.map(({ label, url }) => {
          const Icon = Icons[label]
          return (
            <Item key={url}>
              <Link
                href={url}
                aria-label={label}
                className={`umami--click--${label} text-neutral-50`}
                external
              >
                <Icon size={22} />
              </Link>
            </Item>
          )
        })}
      </Content>
    </Wrapper>
  )
}
