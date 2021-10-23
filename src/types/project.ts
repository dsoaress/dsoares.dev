export type ProjectType = {
  id: string
  title: string
  description: string
  tags: string
  repositoryUrl: string
  repo: string
  stars: number
  cover: string
}

export type RepositoryResponse = {
  repository: {
    url: string
    stargazerCount: number
  }
}

export type ProjectsResponse = {
  allProjects: {
    edges: {
      node: ProjectContentResponse
    }[]
  }
}

type ProjectContentResponse = {
  _meta: {
    id: string
  }
  title: string
  description: string
  cover: {
    url: string
  }
  tags: string
  repo: string
}
