import fs from 'fs'
import { gql } from 'graphql-request'
import matter from 'gray-matter'
import { join } from 'path'
import readingTime from 'reading-time'

import { config } from '@/data/config'
import { projects } from '@/data/projects'
import { github } from '@/services/github'

import { formatDate } from './formatDate'

type GithubResponse = {
  repository: {
    stargazerCount: number
  }
}

const postsDirectory = join(process.cwd(), '_data/posts')
const postsPath = fs.readdirSync(postsDirectory)

export function getPostBySlug(slug: string, withContent = true, locale: string) {
  const fullPath = join(postsDirectory, `${slug}.${locale}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    title: data.title,
    description: data.description,
    slug,
    cover: data.cover,
    date: formatDate(data.date, locale),
    rawDate: data.date,
    readingTime: Math.ceil(readingTime(content).minutes),
    content: withContent ? content : null
  }
}

export function getAllPaths() {
  return postsPath.map(path => {
    const [slug, locale] = path.split('.')
    return {
      params: { slug },
      locale
    }
  })
}

export function getAllPosts(locale: string) {
  return postsPath
    .filter(path => {
      const [, postLocale] = path.split('.')
      return postLocale === locale
    })
    .map(path => {
      const [slug] = path.split('.')
      return getPostBySlug(slug, false, locale)
    })
    .sort((a, b) => (a && b && a.rawDate < b.rawDate ? 1 : -1))
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
