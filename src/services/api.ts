import { gql } from 'graphql-request'
import { getPlaiceholder } from 'plaiceholder'

import { config } from '@/data/config'
import { projects } from '@/data/projects'
import { github } from '@/services/github'

type GithubResponse = {
  repository: {
    forkCount: number
    stargazerCount: number
  }
}

export async function getAvatarBlurDataURL() {
  const { base64: avatarBlurDataURL } = await getPlaiceholder(config.profile.avatar, { size: 10 })
  return avatarBlurDataURL
}

export async function getAllProjects() {
  return await Promise.all(
    projects.map(async project => {
      const gitHubData = await github<GithubResponse>(
        gql`
          query ($owner: String!, $name: String!) {
            repository(owner: $owner, name: $name) {
              forkCount
              stargazerCount
            }
          }
        `,
        {
          variables: {
            owner: config.profile.githubUsername,
            name: project.repo
          }
        }
      )

      const { base64: coverBlurDataURL } = await getPlaiceholder(project.cover, { size: 10 })

      return {
        ...project,
        coverBlurDataURL,
        forks: gitHubData?.repository.forkCount || 0,
        stars: gitHubData?.repository.stargazerCount || 0
      }
    })
  )
}
