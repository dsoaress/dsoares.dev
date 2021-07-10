import { useRouter } from 'next/router'

import { formatDate } from '@/lib/formatDate'
import { Post } from '@/types/post'

export function Posts({ posts }: { posts: Post[] }) {
  const { locale } = useRouter()

  console.log(formatDate(posts[0].publishedAt)[locale])
  return <div />
}
