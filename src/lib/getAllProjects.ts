import { config } from '@/data/config'
import { projects } from '@/data/projects'
import { gql } from '@/lib/gql'
import { github } from '@/services/github'

export type GithubResponse = {
  repository: {
    url: string
    stargazerCount: number
  }
}

export async function getAllProjects() {
  return await Promise.all(
    projects.map(async project => {
      const gitHubData = await github<GithubResponse>(
        gql`
          query ($owner: String!, $name: String!) {
            repository(owner: $owner, name: $name) {
              url
              stargazerCount
            }
          }
        `,
        {
          variables: {
            owner: config.githubUsername,
            name: project.repo
          }
        }
      )

      return {
        ...project,
        repositoryUrl: gitHubData.repository.url,
        stars: gitHubData.repository.stargazerCount
      }
    })
  )
}
