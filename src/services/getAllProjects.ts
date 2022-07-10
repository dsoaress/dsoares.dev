import { gql } from 'graphql-request'
import { getPlaiceholder } from 'plaiceholder'

import { github } from '@/services/github'
import { supabase } from '@/services/supabase'
import type { Project } from '@/types'

type ProjectResponse = Omit<Project, 'coverBlurDataURL' | 'forks' | 'stars'>

type GithubResponse = {
  repository: {
    forkCount: number
    stargazerCount: number
  }
}

export async function getAllProjects() {
  const { data: projects, error } = await supabase
    .from<ProjectResponse>('projects')
    .select()
    .eq('published', 'true')
    .order('order', { ascending: true })

  if (error) {
    console.log('supabase:', error)
    return []
  }

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
            owner: project.githubOwner,
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
