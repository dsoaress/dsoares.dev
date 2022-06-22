import type { Project } from '@/types'

const tags = 'tag a, tag b, tag c'

export const projects: Project[] = [
  {
    title: 'Project 1',
    description: {
      en: 'Project 1 description',
      es: 'Descripción del proyecto 1',
      pt: 'Descrição do projeto 1'
    },
    tags,
    repo: 'project-1',
    repositoryUrl: 'https://github.com/johndoe/project-1',
    cover: '/assets/projects/project-1.png',
    coverBlurDataURL: '',
    forks: 5,
    stars: 10
  },
  {
    title: 'Project 2',
    description: {
      en: 'Project 2 description',
      es: 'Descripción del proyecto 2',
      pt: 'Descrição do projeto 2'
    },
    tags,
    repo: 'project-2',
    repositoryUrl: 'https://github.com/johndoe/project-2',
    cover: '/assets/projects/project-2.png',
    coverBlurDataURL: '',
    forks: 5,
    stars: 10
  },
  {
    title: 'Project 3',
    description: {
      en: 'Project 3 description',
      es: 'Descripción del proyecto 3',
      pt: 'Descrição do projeto 3'
    },
    tags,
    repo: 'project-3',
    repositoryUrl: 'https://github.com/johndoe/project-3',
    cover: '/assets/projects/project-3.png',
    coverBlurDataURL: '',
    forks: 5,
    stars: 10
  }
]
