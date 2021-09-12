import axios from 'axios'

export const github = axios.create({
  baseURL: `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/`,
  headers: {
    Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`
  }
})
