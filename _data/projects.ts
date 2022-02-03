export const projects: Project[] = [
  {
    title: 'React Query University app',
    description: {
      en: 'This application is a practical demonstration of the power of React Query',
      pt: 'Este aplicativo é uma demonstração prática do poder do React Query'
    },
    tags: 'React, React Query, TypeScript',
    repo: 'react-query-example',
    cover: '/assets/projects/react-query-example.png'
  },
  {
    title: 'React News',
    description: {
      en: 'Next.js blog with Paywall and integration with Stripe, Faunadb and Prismic.',
      pt: 'Blog Next.js com Paywall e integração com Stripe, Faunadb e Prismic.'
    },
    tags: 'TypeScript, Next.js, Stripe, Faunadb, Prismic',
    repo: 'react-news',
    cover: '/assets/projects/react-news.jpeg'
  },
  {
    title: 'dsoares.me',
    description: {
      en: 'Source of my personal site using Next.js (with TypeScript).',
      pt: 'Código fonte do meu site pessoal utilizando Next.js (com TypeScript).'
    },
    tags: 'TypeScript, Next.js',
    repo: 'dsoares.me',
    cover: '/assets/projects/dsoares.jpeg'
  }
]

type Project = {
  title: string
  description: {
    en: string
    pt: string
  }
  tags: string
  repo: string
  cover: string
}
