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

import { useData } from '@/hooks/useData'

export const Icons = {
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

export function Skills() {
  const { c } = useData()

  return (
    <div className="mx-auto">
      <ul className="flex list-none flex-wrap justify-center gap-6 text-neutral-200">
        {c.skills.map(label => {
          const Icon = Icons[label]
          return (
            <li key={label}>
              <Icon size={18} aria-label={label} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
