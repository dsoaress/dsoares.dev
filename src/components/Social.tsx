import { AiFillGithub, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsEnvelope } from 'react-icons/bs'
import { FaDev, FaLinkedinIn } from 'react-icons/fa'

import { Link } from '@/components/Link'
import { useData } from '@/hooks/useData'

export const Icons = {
  Email: BsEnvelope,
  GitHub: AiFillGithub,
  LinkedIn: FaLinkedinIn,
  Dev: FaDev,
  Instagram: AiOutlineInstagram,
  WhatsApp: AiOutlineWhatsApp
}

export function Social() {
  const { c } = useData()

  return (
    <div className="mx-auto">
      <ul className="flex list-none flex-wrap justify-center gap-6">
        {c.social.map(({ label, url }) => {
          const Icon = Icons[label]
          return (
            <li
              className="transform transition-transform hover:scale-110 active:scale-95"
              key={url}
            >
              <Link
                href={url}
                aria-label={label}
                className={`umami--click--${label} text-neutral-50`}
                external
              >
                <Icon size={22} />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
