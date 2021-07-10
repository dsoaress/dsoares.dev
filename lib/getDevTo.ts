import { fetcher } from './fetcher'

const username = process.env.NEXT_PUBLIC_DEV_TO_USERNAME
export const postsQuery = `https://dev.to/api/articles?username=${username}`

export async function getDevTo() {
  const data = await fetcher(postsQuery)
  return data
}
