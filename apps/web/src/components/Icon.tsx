import { AiFillGithub, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsEnvelope } from 'react-icons/bs'
import { FaDev, FaLinkedinIn } from 'react-icons/fa'
import {
  SiApachekafka,
  SiExpo,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiRedis,
  SiStorybook,
  SiTypescript
} from 'react-icons/si'

const Icons = {
  // social
  Email: BsEnvelope,
  GitHub: AiFillGithub,
  LinkedIn: FaLinkedinIn,
  Dev: FaDev,
  Instagram: AiOutlineInstagram,
  WhatsApp: AiOutlineWhatsApp,

  // skills
  React: SiReact,
  'Next.js': SiNextdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Jest: SiJest,
  'Nest.js': SiNestjs,
  Expo: SiExpo,
  Node: SiNodedotjs,
  Storybook: SiStorybook,
  Prisma: SiPrisma,
  GraphQL: SiGraphql,
  Redis: SiRedis,
  Kafka: SiApachekafka
}

export type IconsVariants = keyof typeof Icons

type IconProps = {
  variant: IconsVariants
  size?: number
  className?: string
}

export function Icon({ variant, size = 16, ...props }: IconProps) {
  const IconBase = Icons[variant]
  return <IconBase size={size} {...props} />
}
