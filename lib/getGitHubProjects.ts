import { fetcher } from './fetcher'

const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME
export const projectsQuery = `https://api.github.com/users/${username}/repos?sort=pushed`

export async function getGitHubProjects() {
  const data = await fetcher(projectsQuery)
  return data
}
