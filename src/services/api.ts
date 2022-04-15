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

export async function getAvatar() {
  const { base64: blurDataURL, img } = await getPlaiceholder(config.profile.avatar, { size: 10 })

  return {
    src: img.src,
    type: img.type,
    blurDataURL
  }
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
            owner: config.githubUsername,
            name: project.repo
          }
        }
      )

      const { base64: blurDataURL, img } = await getPlaiceholder(project.cover, { size: 10 })

      return {
        ...project,
        transformadCover: {
          src: img.src,
          type: img.type,
          blurDataURL
        },
        forks: gitHubData?.repository.forkCount,
        stars: gitHubData?.repository.stargazerCount || 0
      }
    })
  )
}
