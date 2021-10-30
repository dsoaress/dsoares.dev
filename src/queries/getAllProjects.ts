import { GetStaticPropsContext } from 'next'

import { gql } from '@/lib/gql'
import { formatLocale } from '@/lib/localeUtils'
import { github } from '@/services/github'
import { prismic } from '@/services/prismic'
import { RepositoryResponse } from '@/types/project'
import { ProjectsResponse } from '@/types/project'

export async function getAllProjects({ locale }: GetStaticPropsContext) {
  const formattedLocale = formatLocale(locale)

  const data = await prismic<ProjectsResponse>(
    gql`
      query ($lang: String!) {
        allProjects(lang: $lang) {
          edges {
            node {
              _meta {
                id
              }
              title
              description
              tags
              cover
              repo
            }
          }
        }
      }
    `,
    {
      variables: {
        lang: formattedLocale
      }
    }
  )

  return await Promise.all(
    data.allProjects.edges.map(async ({ node }) => {
      const { GITHUB_USERNAME } = process.env

      const gitHubData = await github<RepositoryResponse>(
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
            owner: GITHUB_USERNAME as string,
            name: node.repo
          }
        }
      )

      return {
        id: node._meta.id,
        title: node.title,
        description: node.description,
        tags: node.tags,
        repositoryUrl: gitHubData.repository.url,
        repo: node.repo,
        stars: gitHubData.repository.stargazerCount,
        cover: node.cover.url
      }
    })
  )
}
