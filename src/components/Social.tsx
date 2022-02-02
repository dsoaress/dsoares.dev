import {
  AiFillGithub as GitHub,
  AiOutlineInstagram as Instagram,
  AiOutlineWhatsApp as WhatsApp
} from 'react-icons/ai'
import { BsEnvelope as Email } from 'react-icons/bs'
import { FaDev as Dev, FaLinkedinIn as LinkedIn } from 'react-icons/fa'
import type { IconType } from 'react-icons/lib'

import { Link } from '@/components/Link'
import { useData } from '@/hooks/useData'

const Icons = {
  Email,
  GitHub,
  LinkedIn,
  Dev,
  Instagram,
  WhatsApp
}

export function Social() {
  const { c } = useData()

  return (
    <div className="mx-auto">
      <ul className="inline-flex list-none">
        {c.social.map(({ label, url }) => {
          const Icon: IconType = Icons[label as keyof typeof Icons]
          return (
            <li
              className="mr-6 transition-transform transform last:mr-0 hover:scale-110 active:scale-95"
              key={url}
            >
              <Link
                href={url}
                aria-label={label}
                rel="noopener noreferrer"
                target="_blank"
                className={`umami--click--${label} text-neutral-50`}
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
