import { config } from '@/data/config'
import type { I18n } from '@/types'

import tailwindConfig from '../../tailwind.config'

type Data = {
  c: typeof config
  t: I18n
}

export const data: Data = {
  c: {
    analytics: {
      domain: 'example.com',
      id: '1111111',
      src: 'https://example.com/analytics.js'
    },
    colors: tailwindConfig.theme.extend.colors,
    locales: {
      defaultLocale: 'en',
      locales: ['en']
    },
    profile: {
      avatar: '/assets/avatar.png',
      favicon: {
        src: '/assets/favicon.png',
        sizes: [16, 32, 48, 64, 96, 128, 256, 512]
      },
      githubUsername: 'johndoe',
      shortTitle: 'JDoe',
      title: 'John Doe'
    },
    skills: [
      'Expo',
      'GraphQL',
      'JavaScript',
      'Jest',
      'Kafka',
      'Nest.js',
      'Next.js',
      'Node',
      'Prisma',
      'React',
      'Redis',
      'Storybook',
      'TypeScript'
    ],
    showResume: true,
    social: [
      { label: 'Dev', url: 'https://dev.to/johndoe' },
      { label: 'Email', url: 'mailto:jdoe@mail.com' },
      { label: 'GitHub', url: 'https://github.com/johndoe' },
      { label: 'Instagram', url: 'https://instagram.com/johndoe' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/johndoe' },
      { label: 'WhatsApp', url: 'https://watsapp.com/johndoe' }
    ]
  },
  t: {
    description: 'John Doe is a software engineer and a full-stack developer.',
    errors: {
      buttonLabel: 'Go back',
      internalError: 'Internal error',
      notFound: 'Page not found'
    },
    footer: '© 2020 John Doe',
    listeningNow: 'Listening now:',
    projects: {
      description: 'Projects description',
      title: 'Projects'
    },
    resume: {
      file: '/assets/resume.pdf',
      title: 'Resume'
    }
  }
}

export default jest.mock('@/hooks/useData', () => ({
  useData: () => ({ ...data })
}))
