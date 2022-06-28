import type { Project } from '@/types'

type Projects = Omit<Project, 'coverBlurDataURL' | 'forks' | 'stars'>[]

export const projects: Projects = [
  {
    title: 'Nest.js Clean Architecture',
    description: {
      en: 'A clean architecture for Nest.js applications',
      es: 'Una arquitectura limpia para aplicaciones de Nest.js',
      pt: 'Uma arquitetura limpa para aplicações Nest.js'
    },
    tags: 'Nest.js, Clean Architecture, TypeScript',
    repo: 'nest-clean-architecture',
    repositoryUrl: 'https://github.com/dsoaress/nest-clean-architecture',
    cover: '/assets/projects/nest-clean-architecture.png'
  },
  {
    title: 'React Query University app',
    description: {
      en: 'This application is a practical demonstration of the power of React Query',
      es: 'Esta aplicación es una demostración práctica de la potencia de React Query',
      pt: 'Este aplicativo é uma demonstração prática do poder do React Query'
    },
    tags: 'React, React Query, TypeScript',
    repo: 'react-query-example',
    repositoryUrl: 'https://github.com/dsoaress/react-query-example',
    cover: '/assets/projects/react-query-example.png'
  },
  {
    title: 'React News',
    description: {
      en: 'Next.js blog with Paywall and integration with Stripe, Faunadb and Prismic',
      es: 'Blog Next.js con Paywall y integración con Stripe, Faunadb y Prismic',
      pt: 'Blog Next.js com Paywall e integração com Stripe, Faunadb e Prismic'
    },
    tags: 'TypeScript, Next.js, Stripe, Faunadb, Prismic',
    repo: 'react-news',
    repositoryUrl: 'https://github.com/dsoaress/react-news',
    cover: '/assets/projects/react-news.jpeg'
  },
  {
    title: 'dsoares.me',
    description: {
      en: 'Source of my personal site using Next.js (with TypeScript)',
      es: 'Fuente de mi sitio personal usando Next.js (con TypeScript)',
      pt: 'Código fonte do meu site pessoal utilizando Next.js (com TypeScript)'
    },
    tags: 'TypeScript, Next.js',
    repo: 'dsoares.me',
    repositoryUrl: 'https://github.com/dsoaress/dsoares.me',
    cover: '/assets/projects/dsoares.jpeg'
  }
]
