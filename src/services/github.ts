import axios from 'axios'

export type GitHubAPIType = {
  html_url: string
  stargazers_count: number
}

export const github = axios.create({
  baseURL: `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/`,
  headers: {
    Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`
  }
})
