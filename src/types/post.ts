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
