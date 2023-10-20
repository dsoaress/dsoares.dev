import fs from 'node:fs/promises'

import { Redis } from '@upstash/redis/with-fetch'
import { gql } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getPlaiceholder } from 'plaiceholder'

import { config, projects } from '@/data'
import { github } from '@/services'
import type { CurrentTrack } from '@/types'

type GithubResponse = {
  repository: {
    forkCount: number
    stargazerCount: number
  }
}

const getImage = async (src: string) => {
  const buffer = await fs.readFile(src)
  return getPlaiceholder(buffer, { size: 10 })
}

export async function getAvatarBlurDataURL() {
  const buffer = await fs.readFile(config.profile.avatar)
  const { base64: avatarBlurDataURL } = await getPlaiceholder(buffer, { size: 10 })
  return avatarBlurDataURL
}

export async function getAllProjects() {
  return await Promise.all(
    projects?.map(async project => {
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

      const buffer = await fs.readFile(project.cover)
      const { base64: coverBlurDataURL } = await getPlaiceholder(buffer, { size: 10 })

      return {
        ...project,
        coverBlurDataURL,
        forks: gitHubData?.repository.forkCount ?? 0,
        stars: gitHubData?.repository.stargazerCount ?? 0
      }
    })
  )
}

export async function getCurrentTrack(_req: NextApiRequest, res: NextApiResponse) {
  const upstashClient = Redis.fromEnv()
  const currentTrack = await upstashClient.get<CurrentTrack>('current-track')

  res.status(200).json(currentTrack)
}
