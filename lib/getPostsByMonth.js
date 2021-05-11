import { isSameMonth, isSameYear, parseISO } from 'date-fns'

export function getPostsByMonth(posts) {
  return posts.reduce((postsByMonth, post) => {
    const exists = postsByMonth.find(
      p =>
        isSameMonth(parseISO(post.date), p.date) &&
        isSameYear(parseISO(post.date), p.date)
    )

    if (exists) {
      exists.posts.push(post)
    } else {
      postsByMonth.push({
        date: parseISO(post.date),
        posts: [post]
      })
    }

    return postsByMonth
  }, [])
}
