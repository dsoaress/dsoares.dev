import type { Project } from '@/types'

const tags = 'tag a, tag b, tag c'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: {
      en: 'Project 1 description',
      es: 'Descripción del proyecto 1',
      pt: 'Descrição do projeto 1'
    },
    tags,
    repo: 'project-1',
    repositoryUrl: 'https://github.com/johndoe/project-1',
    githubOwner: 'johndoe',
    cover: '/assets/projects/project-1.png',
    coverBlurDataURL: '',
    published: true,
    forks: 0,
    stars: 0,
    order: 1
  },
  {
    id: 2,
    title: 'Project 2',
    description: {
      en: 'Project 2 description',
      es: 'Descripción del proyecto 2',
      pt: 'Descrição do projeto 2'
    },
    tags,
    repo: 'project-2',
    repositoryUrl: 'https://github.com/johndoe/project-2',
    githubOwner: 'johndoe',
    cover: '/assets/projects/project-2.png',
    coverBlurDataURL: '',
    published: true,
    forks: 5,
    stars: 10,
    order: 2
  },
  {
    id: 3,
    title: 'Project 3',
    description: {
      en: 'Project 3 description',
      es: 'Descripción del proyecto 3',
      pt: 'Descrição do projeto 3'
    },
    tags,
    repo: 'project-3',
    repositoryUrl: 'https://github.com/johndoe/project-3',
    githubOwner: 'johndoe',
    cover: '/assets/projects/project-3.png',
    coverBlurDataURL: '',
    published: true,
    forks: 5,
    stars: 10,
    order: 3
  }
]
