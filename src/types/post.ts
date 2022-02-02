export type Post = {
  id: string
  slug: string
  title: string
  description: string
  cover: string
  date: string
  readingTime: number
  content?: string
}

export type PostsResponse = {
  allPosts: {
    edges: {
      node: PostContentResponse
    }[]
  }
}

export type PostResponse = {
  post: PostContentResponse
}

type PostContentResponse = {
  _meta: {
    id: string
    uid: string
    lang: string
  }
  title: string
  description: string
  cover: {
    url: string
  }
  date: string
  content: []
}
