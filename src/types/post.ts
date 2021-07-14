export type Post = {
  id: number
  title: string
  description: string
  url: string
  publicReactionsCount: number
  coverImage: string
  publishedAt: string
  readingTimeMinutes: number
  organization: {
    username: string
  }
}
