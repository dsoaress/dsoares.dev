export type Project = {
  id: number
  title: string
  description: {
    en: string
    es: string
    pt: string
  }
  tags: string
  repositoryUrl: string
  githubOwner: string
  repo: string
  forks: number
  stars: number
  cover: string
  coverBlurDataURL: string
  published: boolean
  order: number
}
