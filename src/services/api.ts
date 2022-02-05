import { gql } from 'graphql-request'

import { config } from '@/data/config'
import { projects } from '@/data/projects'
import { github } from '@/services/github'

type GithubResponse = {
  repository: {
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
        stars: gitHubData?.repository.stargazerCount || 0
      }
    })
  )
}
