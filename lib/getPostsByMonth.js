import { isSameMonth, isSameYear, parseISO } from 'date-fns'

import getPosts from '@/lib/getPosts'

export function byMonth(posts) {
  return posts.reduce((month, post) => {
    const exists = month.find(
      p =>
        isSameMonth(parseISO(post.date), p.date) &&
        isSameYear(parseISO(post.date), p.date)
    )

    if (exists) {
      exists.posts.push(post)
    } else {
      month.push({
        date: parseISO(post.date),
        posts: [post]
      })
    }

    return month
  }, [])
}

export default async function getPostsByMonth(locale) {
  const posts = await getPosts(locale)
  const postsByMonth = byMonth(posts)

  return JSON.parse(JSON.stringify(postsByMonth))
}
