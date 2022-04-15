import type { TransformadImg } from './transformadImg'

export type Project = {
  title: string
  description: {
    en: string
    es: string
    pt: string
  }
  tags: string
  repositoryUrl: string
  repo: string
  forks: number
  stars: number
  cover: string
  transformadCover: TransformadImg
}
